import { makeAutoObservable } from "mobx";
import type { IWord } from "stores/WordsStore";
import { getRandomElement } from "utils";
import type { RootStore } from "../RootStore";
import type {
  ITeamGameInfo,
  IWordsFromRound,
  WordsStatus,
} from "./GameStore.type";

class GameStore {
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.gameTeams = this.rootStore.teamsStore.teams.map((team, index) => {
      return {
        ...team,
        points: 0,
        order: index,
      };
    });
    [this.currentTeam] = this.gameTeams;
    // need to be on the bottom line of constructor
    makeAutoObservable(this);
  }

  public rootStore: RootStore;

  public currentTeam: ITeamGameInfo;

  public gameTeams: ITeamGameInfo[];

  public wordsFromRound: IWordsFromRound[] = [];

  public timeOver: boolean = false;

  public showResults: boolean = false;

  get currentWord() {
    return this.wordsFromRound.find(({ status }) => status === "IDLE");
  }

  get randomUniqWord(): IWordsFromRound {
    const { wordsFromCheckedGroups } = this.rootStore.wordsStore;
    const currentTeamWordsIds = this.wordsFromRound.map((word) => word.id);
    const randomWord =
      getRandomElement(
        wordsFromCheckedGroups.filter(
          (word) => !currentTeamWordsIds.includes(word.id)
        )
      ) ||
      getRandomElement(wordsFromCheckedGroups) ||
      wordsFromCheckedGroups[0];
    return {
      ...randomWord,
      status: "IDLE",
    };
  }

  public toggleCurrentTeam = () => {
    const team = this.gameTeams.find(
      (t) => this.currentTeam && t.order > this.currentTeam.order
    );

    if (team) {
      this.currentTeam = team;
    } else {
      [this.currentTeam] = this.gameTeams;
    }
  };

  public onTimeOver = () => {
    this.timeOver = true;
  };

  public onGuess = (word: IWord) => {
    this.handleQueueWords(word, "GUESSED");
  };

  public onDecline = (word: IWord) => {
    this.handleQueueWords(word, "DECLINED");
  };

  public toggleWordStatus = (word: IWord, guessed: boolean) => {
    const status = guessed ? "GUESSED" : "DECLINED";
    const wordIndex = this.wordsFromRound.findIndex((w) => w.id === word.id);
    this.wordsFromRound[wordIndex].status = status;
  };

  public saveResultsAndPrepareNextRound = () => {
    // TODO: Place penalty logic here
    const guessedCount = this.wordsFromRound.filter(
      (w) => w.status === "GUESSED"
    ).length;

    this.gameTeams = this.gameTeams.map((team) => {
      if (team.uuid === this.currentTeam.uuid) {
        return {
          ...team,
          points: team.points + guessedCount,
        };
      }
      return team;
    });
    this.toggleCurrentTeam();
  };

  public handleQueueWords = (word: IWord, status: WordsStatus) => {
    const wordIndex = this.wordsFromRound.findIndex(
      (w) => w.status === "IDLE" && w.id === word.id
    );
    this.wordsFromRound[wordIndex].status = status;
    if (!this.timeOver) {
      this.wordsFromRound.push(this.randomUniqWord);
    } else {
      this.showResults = true;
    }
  };

  public startRound = () => {
    this.showResults = false;
    this.timeOver = false;
    this.wordsFromRound = [];
    this.wordsFromRound.push(this.randomUniqWord);
  };
}

export default GameStore;

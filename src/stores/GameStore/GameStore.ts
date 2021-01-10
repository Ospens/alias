import { makeAutoObservable, observable } from "mobx";
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
    makeAutoObservable(this, {
      wordsFromRound: observable,
    });
    this.rootStore = rootStore;
    this.gameTeams = this.rootStore.teamsStore.teams.map((team, index) => {
      return {
        ...team,
        points: 0,
        order: index,
      };
    });
    [this.currentTeam] = this.gameTeams;
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
    console.log(this.wordsFromRound[wordIndex].status);
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
    this.wordsFromRound = [];
    this.wordsFromRound.push(this.randomUniqWord);
  };
}

export default GameStore;

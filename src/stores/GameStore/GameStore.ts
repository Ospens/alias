import { makeAutoObservable } from "mobx";
import type { IWord } from "stores/WordsStore";
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
        rounds: 0,
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

  public winner: ITeamGameInfo | undefined = undefined;

  get currentWord() {
    return this.wordsFromRound.find(({ status }) => status === "IDLE");
  }

  get randomUniqWord(): IWordsFromRound {
    return {
      ...this.rootStore.wordsStore.getRandomUnusedWord(),
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

  public onGuess = (wordValue: string) => {
    this.handleQueueWords(wordValue, "GUESSED");
  };

  public onDecline = (wordValue: string) => {
    this.handleQueueWords(wordValue, "DECLINED");
  };

  public toggleWordStatus = (word: IWord, guessed: boolean) => {
    const status = guessed ? "GUESSED" : "DECLINED";
    const wordIndex = this.wordsFromRound.findIndex(
      (w) => w.value === word.value
    );
    this.wordsFromRound = Object.assign([], this.wordsFromRound, {
      [wordIndex]: { ...this.wordsFromRound[wordIndex], status },
    });
  };

  public saveResultsAndPrepareNextRound = () => {
    // TODO: Place penalty logic here
    const guessedCount = this.wordsFromRound.filter(
      (w) => w.status === "GUESSED"
    ).length;

    this.currentTeam.points += guessedCount;
    this.currentTeam.rounds += 1;
    this.gameTeams = this.gameTeams.map((team) => {
      return team.uuid === this.currentTeam.uuid ? this.currentTeam : team;
    });

    const teamsRounds = this.gameTeams.map((team) => team.rounds);
    const allTeamsFinishedRound = teamsRounds.every(
      (round) => round === teamsRounds[0]
    );
    if (allTeamsFinishedRound) {
      const { pointsForWin } = this.rootStore.settingsStore;
      [this.winner] = this.gameTeams
        .filter((team) => team.points > pointsForWin)
        .sort((teamA, teamB) => teamB.points - teamA.points); // The higher points
    }
    this.toggleCurrentTeam();
  };

  public handleQueueWords = (wordValue: string, status: WordsStatus) => {
    const wordIndex = this.wordsFromRound.findIndex(
      (w) => w.status === "IDLE" && w.value === wordValue
    );
    this.wordsFromRound = Object.assign([], this.wordsFromRound, {
      [wordIndex]: { ...this.wordsFromRound[wordIndex], status },
    });
    if (!this.timeOver) {
      this.wordsFromRound = [...this.wordsFromRound, this.randomUniqWord];
    } else {
      this.showResults = true;
    }
  };

  public startRound = () => {
    this.showResults = false;
    this.timeOver = false;
    this.wordsFromRound = [this.randomUniqWord];
  };
}

export default GameStore;

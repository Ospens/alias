import { makeAutoObservable } from "mobx";
import { Team } from "stores/TeamsStore";
import type { IWord, WordsStore } from "../WordsStore";
import type {
  ITeamGameInfo,
  IWordsFromRound,
  WordsStatus,
} from "./GameStore.type";

class GameStore {
  private readonly wordsStore: WordsStore;

  private readonly penaltyForSkip: boolean;

  private readonly pointsForWin: number;

  public currentTeam: ITeamGameInfo;

  public gameTeams: ITeamGameInfo[];

  public wordsFromRound: IWordsFromRound[] = [];

  public timeOver: boolean = false;

  public showResults: boolean = false;

  public winner: ITeamGameInfo | undefined = undefined;

  constructor(
    wordsStore: WordsStore,
    teams: Team[],
    penaltyForSkip: boolean,
    pointsForWin: number
  ) {
    this.wordsStore = wordsStore;
    this.pointsForWin = pointsForWin;
    this.penaltyForSkip = penaltyForSkip;
    this.gameTeams = teams.map((team, index) => {
      return {
        ...team,
        points: 0,
        rounds: 0,
        order: index,
      };
    });
    [this.currentTeam] = this.gameTeams;
    // need to be after assignments
    makeAutoObservable(this);
  }

  get guessedCount() {
    return (
      this.wordsFromRound.filter((w) => w.status === "GUESSED").length || 0
    );
  }

  get declinedCount() {
    return (
      this.wordsFromRound.filter((w) => w.status === "DECLINED").length || 0
    );
  }

  get currentWord() {
    return this.wordsFromRound.find(({ status }) => status === "IDLE");
  }

  get randomUniqWord(): IWordsFromRound {
    const wordValues = this.wordsFromRound.map((w) => w.value);
    return {
      ...this.wordsStore.getRandomUnusedWord(wordValues),
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

  public handleTimeOver = () => {
    this.timeOver = true;
  };

  public guessCurrentWord = () => {
    this.handleQueueWords(this.currentWord, "GUESSED");
  };

  public declineCurrentWord = () => {
    this.handleQueueWords(this.currentWord, "DECLINED");
  };

  public toggleWordStatus = (word: IWord, guessed: boolean) => {
    const status = guessed ? "GUESSED" : "DECLINED";
    const wordIndex = this.wordsFromRound.findIndex(
      (w) => w.value === word.value
    );
    this.wordsFromRound[wordIndex].status = status;
  };

  public saveResultsAndPrepareNextRound = () => {
    const guessedCount = this.wordsFromRound.filter(
      (w) => w.status === "GUESSED"
    ).length;
    const penaltyPoints = this.penaltyForSkip
      ? this.wordsFromRound.filter((w) => w.status === "DECLINED").length
      : 0;

    const roundPoints = guessedCount - penaltyPoints;
    this.currentTeam = {
      ...this.currentTeam,
      rounds: this.currentTeam.rounds + 1,
      points:
        roundPoints > 0
          ? this.currentTeam.points + roundPoints
          : this.currentTeam.points,
    };
    this.gameTeams = this.gameTeams.map((team) => {
      return team.uuid === this.currentTeam.uuid ? this.currentTeam : team;
    });

    const teamsRounds = this.gameTeams.map((team) => team.rounds);
    const allTeamsFinishedRound = teamsRounds.every(
      (round) => round === teamsRounds[0]
    );
    if (allTeamsFinishedRound) {
      const winners = this.gameTeams
        .filter((team) => team.points > this.pointsForWin)
        .sort((teamA, teamB) => teamB.points - teamA.points); // The higher points
      // TODO: add case when multiple teams have the same top result
      if (
        winners.length === 1 ||
        (winners.length > 1 && winners[0].points !== winners[1].points)
      ) {
        [this.winner] = winners;
      }
    }
    this.toggleCurrentTeam();
  };

  public handleQueueWords = (word: IWord, status: WordsStatus) => {
    const wordIndex = this.wordsFromRound.findIndex(
      (w) => w.status === "IDLE" && w.value === word.value
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
    this.wordsFromRound = [this.randomUniqWord];
  };
}

export default GameStore;

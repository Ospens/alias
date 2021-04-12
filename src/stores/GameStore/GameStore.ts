import { makeAutoObservable } from "mobx";
import { Team } from "stores/TeamsStore";
import type { IWord, WordsStore } from "../WordsStore";
import type { ITeamGameInfo, IWordsFromRound } from "./GameStore.type";

class GameStore {
  private readonly wordsStore: WordsStore;

  private readonly penaltyForSkip: boolean;

  public readonly pointsForWin: number;

  public readonly roundDuration: number;

  public currentTeam: ITeamGameInfo;

  public gameTeams: ITeamGameInfo[];

  public wordsFromRound: IWordsFromRound[] = [];

  public timeOver: boolean = false;

  public showResults: boolean = false;

  public currentWord: IWord;

  public winner: ITeamGameInfo | undefined = undefined;

  constructor(
    wordsStore: WordsStore,
    teams: Team[],
    penaltyForSkip: boolean,
    pointsForWin: number,
    roundDuration: number
  ) {
    console.log("===> GameStore constructor");
    this.wordsStore = wordsStore;
    this.pointsForWin = pointsForWin;
    this.penaltyForSkip = penaltyForSkip;
    this.roundDuration = roundDuration;
    this.currentWord = this.wordsStore.getRandomUnusedWord();
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

  public guessCurrentWord = async () => {
    this.handleQueueWords(true);
    return this.showResults;
  };

  public declineCurrentWord = async () => {
    this.handleQueueWords(false);
    return this.showResults;
  };

  public toggleWordStatus = (word: IWordsFromRound, guessed: boolean) => {
    const wordIndex = this.wordsFromRound.findIndex(
      (w) => w.value === word.value
    );
    this.wordsFromRound[wordIndex].guessed = guessed;
  };

  public saveResultsAndPrepareNextRound = () => {
    const guessedCount = this.wordsFromRound.filter((w) => w.guessed).length;
    const penaltyPoints = this.penaltyForSkip
      ? this.wordsFromRound.filter((w) => !w.guessed).length
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

  public handleQueueWords = (guessed: boolean) => {
    this.wordsFromRound.push({ ...this.currentWord, guessed });

    const wordValues = this.wordsFromRound.map((w) => w.value);
    this.currentWord = this.wordsStore.getRandomUnusedWord(wordValues);

    if (this.timeOver) {
      this.showResults = true;
    }
  };

  public startRound = () => {
    this.showResults = false;
    this.timeOver = false;
    this.wordsFromRound = [];
  };
}

export default GameStore;

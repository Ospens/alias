import type { ITeam } from "stores/TeamsStore";

export interface IWordsFromRound {
  id: string;
  name: string;
  guessed: boolean;
}

export interface ITeamGameInfo extends ITeam {
  points: number;
  order: number;
  finishedRounds: number;
  wordsFromRound: IWordsFromRound[];
}

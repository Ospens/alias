import { ITeam } from "stores/TeamsStore/TeamsStore.types";

export interface IWordsFromRound {
  value: string;
  guessed: boolean;
}

export interface ITeamGameInfo extends ITeam {
  points: number;
  order: number;
  rounds: number;
}

import type { IWord } from "stores/WordsStore";
import { ITeam } from "stores/TeamsStore/TeamsStore.types";

export interface IWordsFromRound extends IWord {
  guessed: boolean;
}

export interface ITeamGameInfo extends ITeam {
  points: number;
  order: number;
  rounds: number;
}

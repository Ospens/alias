import type { IWord } from "stores/WordsStore";
import { ITeam } from "stores/TeamsStore/TeamsStore.types";

export type WordsStatus = "IDLE" | "GUESSED" | "DECLINED";

export interface IWordsFromRound extends IWord {
  status: WordsStatus;
}

export interface ITeamGameInfo extends ITeam {
  points: number;
  order: number;
  rounds: number;
}

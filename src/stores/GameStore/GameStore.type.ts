import type { Team } from "stores/TeamsStore";
import type { IWord } from "stores/WordsStore";

export type WordsStatus = "IDLE" | "GUESSED" | "DECLINED";

export interface IWordsFromRound extends IWord {
  status: WordsStatus;
}

export interface ITeamGameInfo extends Team {
  points: number;
  order: number;
  rounds: number;
}

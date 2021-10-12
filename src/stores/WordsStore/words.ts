import type { IWord } from "./WordsStore.types";
import baseAsset from "./words/baseAsset";

export const words: IWord[] = baseAsset.map((value) => ({
  value,
  wordGroupId: 1,
}));

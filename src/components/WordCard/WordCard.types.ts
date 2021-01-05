import type { IWord } from "stores/WordsStore";

export interface WordCardProps {
  word: IWord;
  onGuess: (word: IWord) => void;
  onDecline: (word: IWord) => void;
}

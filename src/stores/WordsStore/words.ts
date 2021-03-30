import booksImg from "assets/images/books.png";
import animalsImg from "assets/images/animals.png";
import type { IWord } from "./WordsStore.types";
import baseAsset from "./words/baseAsset";

export const words: IWord[] = baseAsset.map((value) => ({
  value,
  wordGroupId: 1,
}));

export const WORD_SETS_DATA = [
  {
    id: 1,
    name: "Базовый набор",
    words: baseAsset,
    checked: true,
    image: booksImg,
  },
  {
    id: 2,
    name: "Животные",
    words: ["тигр", "зебра", "собака", "хомяк"],
    checked: false,
    image: animalsImg,
  },
];

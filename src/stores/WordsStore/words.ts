import booksImg from "assets/images/books.png";
import animalsImg from "assets/images/animals.png";
import type { IWord } from "./WordsStore.types";
import baseAsset from "./words/baseAsset";

export const words: IWord[] = baseAsset.map((value) => ({
  value,
  wordGroupId: 1,
}));

// export const words: IWord[] = [
//   {
//     value: "Паровоз",
//     wordGroupsIds: ["1"],
//   },
//   {
//     value: "Снежный лес",
//     wordGroupsIds: ["1", "2"],
//   },
//   {
//     value: "Дед мороз",
//     wordGroupsIds: ["2"],
//   },
//   {
//     value: "Новгодняя елка",
//     wordGroupsIds: ["2"],
//   },
//   {
//     value: "Шапка",
//     wordGroupsIds: ["1"],
//   },
//   {
//     value: "постановление",
//     wordGroupsIds: ["1"],
//   },
// ];

export const WORD_SETS_DATA = [
  {
    id: 1,
    name: "Базовый набор",
    words: baseAsset,
    checked: false,
    image: booksImg,
  },
  {
    id: 2,
    name: "Новый год",
    words: ["test"],
    checked: false,
    image: animalsImg,
  },
];

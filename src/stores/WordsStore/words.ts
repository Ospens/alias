import type { IWord, IWordsGroup } from "./WordsStore.types";
import baseAsset from "./words/baseAsset";

export const words: IWord[] = baseAsset.map((value) => ({
  value,
  wordGroupId: "1",
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

export const groups: IWordsGroup[] = [
  {
    id: "1",
    name: "Базовый набор",
    checked: false,
  },
  {
    id: "2",
    name: "Новый год",
    checked: false,
  },
];

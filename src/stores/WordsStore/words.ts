import { generateUUID } from "utils";
import type { IWord, IWordsGroup } from "./WordsStore.types";

export const words: IWord[] = [
  {
    id: generateUUID(),
    value: "Паровоз",
    wordGroupsIds: ["1"],
  },
  {
    id: generateUUID(),
    value: "Снежный лес",
    wordGroupsIds: ["1", "2"],
  },
  {
    id: generateUUID(),
    value: "Дед мороз",
    wordGroupsIds: ["2"],
  },
  {
    id: generateUUID(),
    value: "Новгодняя елка",
    wordGroupsIds: ["2"],
  },
  {
    id: generateUUID(),
    value: "Шапка",
    wordGroupsIds: ["1"],
  },
];

export const groups: IWordsGroup[] = [
  {
    id: "1",
    name: "Базовый набор",
  },
  {
    id: "2",
    name: "Новый год",
  },
];

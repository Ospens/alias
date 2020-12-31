import type { IWordsGroup } from "stores/WordsStore";

export interface WordsGroupProps {
  group: IWordsGroup;
  onPress?: () => void;
}

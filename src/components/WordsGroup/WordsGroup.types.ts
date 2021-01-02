import type { IWordsGroup } from "stores/WordsStore";

export interface WordsGroupProps {
  group: IWordsGroup;
  checked?: boolean;
  onToggle?: (groupId: string) => void;
}

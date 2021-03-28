import type { IWordSet } from "stores/WordsStore";

export interface WordSetProps {
  group: IWordSet;
  checked?: boolean;
  onToggle?: (groupId: string) => void;
}

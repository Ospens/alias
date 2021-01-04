export interface IWord {
  id: string;
  value: string;
  wordGroupsIds: string[];
}

export interface IWordsGroup {
  id: string;
  name: string;
  checked: boolean;
}

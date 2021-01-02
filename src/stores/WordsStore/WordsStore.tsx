import { makeAutoObservable } from "mobx";
import type { RootStore } from "../RootStore";
import { IWord, IWordsGroup } from "./WordsStore.types";
import { words, groups } from "./words";

class WordsStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.words = words;
    this.groups = groups;
  }

  public rootStore: RootStore;

  public words: IWord[];

  public groups: IWordsGroup[];

  public checkedGroupsIds: string[] = [];

  public toggleCheckedGroupsIds = (groupId: string) => {
    const groupIndex = this.checkedGroupsIds.findIndex((id) => id === groupId);

    if (groupIndex > -1) {
      this.checkedGroupsIds.splice(groupIndex, 1);
    } else {
      this.checkedGroupsIds.push(groupId);
    }
  };
}

export default WordsStore;

import { makeAutoObservable } from "mobx";
import type { RootStore } from "../RootStore";
import { IWord, IWordsGroup } from "./WordsStore.types";
import { words, groups } from "./words";

class WordsStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  public groups: IWordsGroup[] = groups;

  public rootStore: RootStore;

  public allWords: IWord[] = words;

  get gameWords(): IWord[] {
    const groupIds = this.groups.map((group) => group.id);
    return this.allWords.filter(({ wordGroupsIds }) =>
      groupIds.filter((groupId) => wordGroupsIds.includes(groupId))
    );
  }

  public toggleCheckedGroup = (groupId: string) => {
    this.groups = this.groups.map((group) => {
      if (group.id === groupId) {
        return {
          ...group,
          checked: !group.checked,
        };
      }
      return group;
    });
  };
}

export default WordsStore;

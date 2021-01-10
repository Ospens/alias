import {
  autorun,
  IReactionDisposer,
  makeAutoObservable,
  runInAction,
} from "mobx";
import { getData, storeData } from "stores/AsyncStorage";
import type { RootStore } from "../RootStore";
import { IWord, IWordsGroup } from "./WordsStore.types";
import { words, groups as defaultGroups } from "./words";

class WordsStore {
  constructor(rootStore: RootStore) {
    getData("WORDS_STORE_GROUPS").then((groups) => {
      if (groups && Array.isArray(groups)) {
        runInAction(() => {
          this.groups = groups;
        });
      }
    });

    makeAutoObservable(this);
    // Need to be below makeAutoObservable(this) line
    this.saveHandler = autorun(() => {
      storeData("WORDS_STORE_GROUPS", this.groups);
    });
    this.rootStore = rootStore;
  }

  public rootStore: RootStore;

  public saveHandler: null | IReactionDisposer = null;

  public groups: IWordsGroup[] = defaultGroups;

  public allWords: IWord[] = words;

  get wordsFromCheckedGroups(): IWord[] {
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

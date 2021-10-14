import { autorun, IReactionDisposer, makeAutoObservable, runInAction } from "mobx";
import { getData, storeData } from "stores/AsyncStorage";
import { getRandomElement } from "utils";
import WordSet from "./WordSet";
import type { IRootStore } from "../RootStore";

class WordsStore {
  public rootStore: IRootStore;

  public wordSets: WordSet[] = [];

  public usedWords: string[] = [];

  private saveHandler: IReactionDisposer;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;

    this.wordSets = this.rootStore.i18NStore.locale.wordSets.list.map((set) => new WordSet(set));

    getData("WORDS_STORE_GROUPS").then((checkedSetIds: unknown) => {
      runInAction(() => {
        if (checkedSetIds && Array.isArray(checkedSetIds)) {
          checkedSetIds.forEach((checkedId) => {
            this.wordSets.find(({ id }) => id === checkedId)?.setCheck(true);
          });
        }
      });
    });

    makeAutoObservable(this);
    // Need to be after makeAutoObservable
    this.saveHandler = autorun(() => {
      storeData(
        "WORDS_STORE_GROUPS",
        this.wordSets.filter(({ checked }) => checked).map(({ id }) => id),
      );
    });
  }

  get wordsFromCheckedGroups(): string[] {
    return this.wordSets.reduce((accum, set) => {
      if (set.checked) {
        accum.push(...set.words);
        return accum;
      }

      return accum;
    }, [] as string[]);
  }

  public getUniqWords = (excludeValues: string[], isDiscardUsedWords = false): string[] => {
    if (isDiscardUsedWords) {
      this.usedWords = [];
    }

    return this.wordsFromCheckedGroups.filter(
      (word) => !excludeValues.includes(word) && !this.usedWords.includes(word),
    );
  };

  public getRandomUnusedWord = (excludeValues: string[] = []): string => {
    let uniqWords = this.getUniqWords(excludeValues);

    let randomWord = getRandomElement(uniqWords);
    if (!randomWord) {
      uniqWords = this.getUniqWords(excludeValues, true);
      randomWord = getRandomElement(uniqWords);
    }
    if (!randomWord) {
      [randomWord] = this.wordsFromCheckedGroups;
    }
    this.usedWords.push(randomWord);
    return randomWord;
  };
}

export default WordsStore;

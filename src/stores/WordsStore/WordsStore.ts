import {
  autorun,
  IReactionDisposer,
  makeAutoObservable,
  runInAction,
} from "mobx";
import { getData, storeData } from "stores/AsyncStorage";
import { getRandomElement } from "utils";
import WordSet from "./WordSet";
import { IWord } from "./WordsStore.types";
import { words, WORD_SETS_DATA } from "./words";

class WordsStore {
  public wordSets: WordSet[] = [];

  public allWords: IWord[] = words;

  public usedWords: IWord[] = [];

  private saveHandler: IReactionDisposer;

  constructor() {
    getData("WORDS_STORE_GROUPS").then((checkedSetIds) => {
      runInAction(() => {
        if (checkedSetIds && Array.isArray(checkedSetIds)) {
          this.wordSets = WORD_SETS_DATA.map(
            (set) =>
              new WordSet({
                ...set,
                checked: checkedSetIds.includes(set.id),
              })
          );
        }
      });
    });

    makeAutoObservable(this);
    // Need to be below makeAutoObservable line
    this.saveHandler = autorun(() => {
      storeData(
        "WORDS_STORE_GROUPS",
        this.wordSets.filter(({ checked }) => checked).map(({ id }) => id)
      );
    });
  }

  get wordsFromCheckedGroups(): IWord[] {
    const groupIds = this.wordSets.map((group) => group.id);
    return this.allWords.filter(({ wordGroupId }) =>
      groupIds.filter((groupId) => wordGroupId === groupId)
    );
  }

  public getRandomUnusedWord = (excludeValues: string[] = []): IWord => {
    const usedWordsValues = this.usedWords.map((word) => word.value);
    const uniqWords = this.wordsFromCheckedGroups.filter(
      (word) =>
        !excludeValues.includes(word.value) &&
        !usedWordsValues.includes(word.value)
    );
    let randomWord = getRandomElement(uniqWords);
    if (!randomWord) {
      console.log("refresh usedWords", this.usedWords.length);
      this.usedWords = [];
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

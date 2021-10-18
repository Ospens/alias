import { makeAutoObservable, reaction, runInAction } from "mobx";
import type { IRootStore } from "../RootStore";
import type { Locale } from "./I18NStore.types";
import { LOCALES, LOCALES_WORD_SETS } from "./locales";
import { LocaleWordSet } from "./I18NStore.types";

class I18NStore {
  public rootStore: IRootStore;

  public locale: Locale;

  public localeWords: LocaleWordSet[];

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    const { languageOfWords } = this.rootStore.settingsStore;
    this.localeWords = LOCALES_WORD_SETS[languageOfWords];
    this.locale = LOCALES[languageOfWords];

    makeAutoObservable(this);

    reaction(
      () => this.rootStore.settingsStore.languageOfWords,
      (nextLanguage) => {
        runInAction(() => {
          this.localeWords = LOCALES_WORD_SETS[nextLanguage];
        });
      },
    );

    reaction(
      () => this.rootStore.settingsStore.languageOfApp,
      (nextLanguage) => {
        runInAction(() => {
          this.locale = LOCALES[nextLanguage];
        });
      },
    );
  }
}

export default I18NStore;

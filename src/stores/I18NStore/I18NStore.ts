import { makeAutoObservable, reaction, runInAction } from "mobx";
import type { IRootStore } from "../RootStore";
import type { Locale } from "./I18NStore.types";
import { LOCALES } from "./locales";

class I18NStore {
  public rootStore: IRootStore;

  public locale: Locale;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    const { language } = this.rootStore.settingsStore;
    this.locale = LOCALES[language];

    makeAutoObservable(this);

    reaction(
      () => this.rootStore.settingsStore.language,
      (nextLanguage) => {
        runInAction(() => {
          this.locale = LOCALES[nextLanguage];
        });
      },
    );
  }
}

export default I18NStore;

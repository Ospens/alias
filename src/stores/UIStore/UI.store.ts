import { makeAutoObservable } from "mobx";
import type RootStore from "../RootStore/Root.store";

class UiStore {
  public rootStore: RootStore;

  public language = "en_US";

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  public get isEnglish() {
    return this.language === "en_US";
  }
}

export default UiStore;

import { makeAutoObservable } from "mobx";
import type { RootStore } from "../RootStore";

class UIStore {
  public rootStore: RootStore;

  public language = "en_US";

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}

export default UIStore;

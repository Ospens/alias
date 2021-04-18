import { makeAutoObservable } from "mobx";
import type { IRootStore } from "../RootStore";

class UIStore {
  public rootStore: IRootStore;

  public language = "en_US";

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}

export default UIStore;

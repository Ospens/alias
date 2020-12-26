import { makeAutoObservable } from "mobx";
import UIStore from "../UIStore/UIStore";
import SettingsStore from "../SettingsStore/SettingsStore";

class RootStore {
  public uiStore: UIStore;

  public settingsStore: SettingsStore;

  constructor() {
    makeAutoObservable(this);
    this.uiStore = new UIStore(this);
    this.settingsStore = new SettingsStore(this);
  }
}

export default RootStore;

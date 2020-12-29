import { makeAutoObservable } from "mobx";
import UIStore from "../UIStore/UIStore";
import SettingsStore from "../SettingsStore";
import TeamsStore from "../TeamsStore";

class RootStore {
  public uiStore: UIStore;

  public settingsStore: SettingsStore;

  public teamsStore: TeamsStore;

  constructor() {
    makeAutoObservable(this);
    this.uiStore = new UIStore(this);
    this.settingsStore = new SettingsStore(this);
    this.teamsStore = new TeamsStore(this);
  }
}

export default RootStore;

import { makeAutoObservable } from "mobx";
import UIStore from "../UIStore/UIStore";
import SettingsStore from "../SettingsStore";
import TeamsStore from "../TeamsStore";
import WordsStore from "../WordsStore";
import GameStore from "../GameStore";

class RootStore {
  constructor() {
    makeAutoObservable(this);
    this.uiStore = new UIStore(this);
    this.settingsStore = new SettingsStore(this);
    this.teamsStore = new TeamsStore(this);
    this.wordsStore = new WordsStore(this);
    this.gameStore = new GameStore(this);
  }

  public uiStore: UIStore;

  public settingsStore: SettingsStore;

  public teamsStore: TeamsStore;

  public wordsStore: WordsStore;

  public gameStore: GameStore;
}

export default RootStore;

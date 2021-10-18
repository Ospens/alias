import { makeAutoObservable } from "mobx";
import UIStore from "../UIStore/UIStore";
import SettingsStore from "../SettingsStore";
import TeamsStore from "../TeamsStore";
import WordsStore from "../WordsStore";
import I18NStore from "../I18NStore";

class RootStore {
  public uiStore: UIStore;

  public settingsStore: SettingsStore;

  public teamsStore: TeamsStore;

  public wordsStore: WordsStore;

  public i18NStore: I18NStore;

  constructor() {
    this.uiStore = new UIStore(this);
    this.settingsStore = new SettingsStore(this);
    this.i18NStore = new I18NStore(this);
    this.teamsStore = new TeamsStore(this);
    this.wordsStore = new WordsStore(this);
    makeAutoObservable(this);
  }
}

export default new RootStore();

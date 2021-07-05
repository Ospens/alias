import {
  autorun,
  IReactionDisposer,
  makeAutoObservable,
  runInAction,
} from "mobx";
import { getData, storeData } from "stores/AsyncStorage";
import type { IRootStore } from "../RootStore";
import type {
  Language,
  RoundDuration,
  PointsForWin,
} from "./SettingsStore.types";

class SettingsStore {
  public rootStore: IRootStore;

  public saveHandler: null | IReactionDisposer = null;

  public language: Language = "ru";

  public roundDuration: RoundDuration = 10;

  public pointsForWin: PointsForWin = 25;

  public penaltyForSkip: boolean = false;

  constructor(rootStore: IRootStore) {
    getData("SETTINGS_STORE_SETTINGS").then((settings) => {
      if (settings) {
        runInAction(() => {
          if (settings.language) {
            this.language = settings.language;
          }
          if (settings.roundDuration) {
            this.roundDuration = settings.roundDuration;
          }
          if (settings.pointsForWin) {
            this.pointsForWin = settings.pointsForWin;
          }
          if (
            settings.penaltyForSkip !== null &&
            settings.penaltyForSkip !== undefined
          ) {
            this.penaltyForSkip = settings.penaltyForSkip;
          }
        });
      }
    });
    makeAutoObservable(this);

    // Need to be below makeAutoObservable(this) line
    this.saveHandler = autorun(() => {
      storeData("SETTINGS_STORE_SETTINGS", {
        language: this.language,
        roundDuration: this.roundDuration,
        pointsForWin: this.pointsForWin,
        penaltyForSkip: this.penaltyForSkip,
      });
    });
    this.rootStore = rootStore;
  }

  public togglePenaltyForSkip = (value: boolean) => {
    this.penaltyForSkip = value;
  };

  public toggleRoundDuration = (value: RoundDuration) => {
    this.roundDuration = value;
  };

  public togglePointsForWin = (value: PointsForWin) => {
    this.pointsForWin = value;
  };
}

export default SettingsStore;

import { makeAutoObservable } from "mobx";
import type { RootStore } from "../RootStore";

export type Language = "en_US" | "ru_RU";

export type RoundDuration = 30 | 60 | 90;

export type PointsForWin = 25 | 50 | 75 | 100;

class SettingsStore {
  public rootStore: RootStore;

  public language: Language = "en_US";

  public roundDuration: RoundDuration = 30;

  public pointsForWin: PointsForWin = 25;

  public penaltyForSkip: boolean = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  public togglePenaltyForSkip = (value: boolean) => {
    this.penaltyForSkip = value;
  };

  public toggleRoundDuration = (value: RoundDuration) => {
    this.roundDuration = value;
  };
}

export default SettingsStore;

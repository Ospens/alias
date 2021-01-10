import { makeAutoObservable } from "mobx";
import type { RootStore } from "../RootStore";
import type {
  Language,
  RoundDuration,
  PointsForWin,
} from "./SettingsStore.types";

class SettingsStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  public rootStore: RootStore;

  public language: Language = "en_US";

  public roundDuration: RoundDuration = 10;

  public pointsForWin: PointsForWin = 25;

  public penaltyForSkip: boolean = false;

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

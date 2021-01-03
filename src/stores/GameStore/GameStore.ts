import { makeAutoObservable } from "mobx";
import type { RootStore } from "../RootStore";
import type { ITeamGameInfo } from "./GameStore.type";

class GameStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.gameTeams = this.rootStore.teamsStore.teams.map((team, index) => {
      return {
        ...team,
        points: 0,
        finishedRounds: 0,
        order: index,
        wordsFromRound: [],
      };
    });
    [this.currentTeam] = this.gameTeams;
  }

  public rootStore: RootStore;

  public currentTeam: ITeamGameInfo;

  public gameTeams: ITeamGameInfo[];

  public toggleCurrentTeam = () => {
    const team = this.gameTeams.find(
      (t) => this.currentTeam && t.order > this.currentTeam.order
    );
    if (team) {
      this.currentTeam = team;
    } else {
      [this.currentTeam] = this.gameTeams;
    }
  };
}

export default GameStore;

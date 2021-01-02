import { makeAutoObservable } from "mobx";
import type { RootStore } from "../RootStore";
import type { ITeamGameInfo } from "./GameStore.type";

class GameStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  public rootStore: RootStore;

  public currentTeam: ITeamGameInfo | undefined = undefined;

  get gameTeams(): ITeamGameInfo[] {
    return this.rootStore.teamsStore.teams.map((team, index) => {
      return {
        ...team,
        points: 0,
        finishedRounds: 0,
        order: index,
        wordsFromRound: [],
      };
    });
  }

  get nextTeam() {
    const team = this.gameTeams.find(
      (t) => this.currentTeam && t.order > this.currentTeam.order
    );
    if (team) {
      return team;
    }
    return this.gameTeams[0];
  }

  public toggleCurrentTeam = () => {
    this.currentTeam = this.nextTeam;
  };
}

export default GameStore;

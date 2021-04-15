import {
  makeAutoObservable,
  runInAction,
  autorun,
  IReactionDisposer,
} from "mobx";
import { storeData, getData } from "stores/AsyncStorage";
import { ALL_TEAMS } from "stores/TeamsStore/TeamsStore.utils";
import { Team } from "./Team";
import type { RootStore } from "../RootStore";
import { TeamData } from "./TeamsStore.types";

class TeamsStore {
  public rootStore: RootStore;

  public saveHandler: null | IReactionDisposer = null;

  public teams: Team[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    getData("TEAMS_STORE_TEAMS").then((teams) => {
      runInAction(() => {
        if (teams && Array.isArray(teams)) {
          teams.forEach((team: TeamData) => {
            this.createTeam(team);
          });
        }
      });
    });

    // Need to be below makeAutoObservable line
    this.saveHandler = autorun(() => {
      storeData(
        "TEAMS_STORE_TEAMS",
        // store create the error. TypeError: cyclic object value
        this.teams.map((t) => ({ ...t, store: null }))
      );
    });
  }

  private generateTeamData = (): TeamData => {
    const notAvailableTeams = this.teams.map((team) => team.uuid);
    const team = ALL_TEAMS.find(
      ({ uuid }) => !notAvailableTeams.includes(uuid)
    );
    return { name: `Команда ${this.teams.length + 1}`, ...team };
  };

  get hasAvailableTeam(): boolean {
    return this.teams.length < ALL_TEAMS.length;
  }

  public createTeam = (data: TeamData = this.generateTeamData()) => {
    const team = new Team(this, data);
    this.teams.push(team);
  };

  public removeTeam = (team: Team) => {
    this.teams = this.teams.filter((t) => t.uuid !== team.uuid);
  };
}

export default TeamsStore;

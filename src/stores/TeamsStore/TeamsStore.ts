import {
  makeAutoObservable,
  runInAction,
  autorun,
  IReactionDisposer,
} from "mobx";
import { generateUUID, getRandomElement } from "utils";
import { storeData, getData } from "stores/AsyncStorage";
import type { RootStore } from "../RootStore";
import type { ITeam } from "./TeamsStore.types";

const teamNames = ["Ученые коты", "Верные псы", "Эрудированные совы"];

class TeamsStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    getData("TEAMS_STORE_TEAMS").then((teams) => {
      if (teams && Array.isArray(teams)) {
        runInAction(() => {
          this.teams = teams;
        });
      }
    });

    // Need to be below makeAutoObservable(this) line
    this.saveHandler = autorun(() => {
      storeData("TEAMS_STORE_TEAMS", this.teams);
    });
  }

  public rootStore: RootStore;

  public saveHandler: null | IReactionDisposer = null;

  public teams: ITeam[] = [];

  get availableTeamNames() {
    const notAvailableTeamNames = this.teams.map((team) => team.name);
    return teamNames.filter((name) => !notAvailableTeamNames.includes(name));
  }

  public createTeam = () => {
    const name =
      getRandomElement(this.availableTeamNames) ||
      `Team #${this.teams.length + 1}`;
    const team: ITeam = {
      uuid: generateUUID(),
      name,
    };
    this.teams.push(team);
  };

  // public updateTeam = (team: ITeam) => {
  //   // const team = this.teams.find((t) = > t.uuid === team.uuid);
  // };

  public removeTeam = (team: ITeam) => {
    this.teams = this.teams.filter((t) => t.uuid !== team.uuid);
  };
}

export default TeamsStore;

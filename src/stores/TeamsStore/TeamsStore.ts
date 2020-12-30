import { makeAutoObservable } from "mobx";
import { generateUUID, getRandomElement } from "utils";
import type { RootStore } from "../RootStore";
import type { ITeam } from "./TeamsStore.types";

const teamNames = ["Cats", "Dogs", "Fish", "Bears"];

class TeamsStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  public rootStore: RootStore;

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

import { makeAutoObservable } from "mobx";
import { generateUUID } from "utils";
import { colors } from "themes";
import type TeamsStore from "./TeamsStore";
import type { ITeam, TeamData } from "./TeamsStore.types";

export class Team implements ITeam {
  private store: TeamsStore;

  public uuid: string;

  public name: string;

  public color: string;

  constructor(store: TeamsStore, data: TeamData) {
    this.store = store;
    this.uuid = data.uuid ?? generateUUID();
    this.name = data.name;
    this.color = data?.color ?? colors.teams.grey;
    makeAutoObservable(this);
  }

  public removeTeam = () => {
    this.store.removeTeam(this);
  };
}

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

  public points: number;

  public rounds: number;

  public order: number;

  constructor(store: TeamsStore, data: TeamData) {
    this.store = store;
    this.uuid = data.uuid ?? generateUUID();
    this.name = data.name ?? `Команда ${data.order + 1}`;
    this.color = data?.color ?? colors.teams.grey;
    this.points = 0;
    this.rounds = 0;
    this.order = data.order;
    makeAutoObservable(this);
  }

  public removeTeam = () => {
    this.store.removeTeam(this);
  };
}

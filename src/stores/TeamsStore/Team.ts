import { makeAutoObservable } from "mobx";
import { generateUUID } from "utils";
import { colors } from "themes";
import { ALL_TEAMS } from "./TeamsStore.utils";
import type TeamsStore from "./TeamsStore";
import type { ITeam, TeamData } from "./TeamsStore.types";

export class Team implements ITeam {
  private store: TeamsStore;

  public uuid: string;

  public name: string;

  public color: string;

  constructor(store: TeamsStore, data?: TeamData) {
    makeAutoObservable(this);
    this.store = store;
    const team = data || this.generateTeamData();
    this.uuid = team.uuid;
    this.name = team.name;
    this.color = team.color;
  }

  private generateTeamData = () => {
    const notAvailableTeams = this.store.teams.map((team) => team.uuid);
    const team = ALL_TEAMS.filter(
      ({ uuid }) => !notAvailableTeams.includes(uuid)
    )[0];
    return (
      team ?? {
        uuid: generateUUID(),
        name: `Команда ${notAvailableTeams.length + 1}`,
        color: colors.teams.grey,
      }
    );
  };

  public removeTeam = () => {
    this.store.removeTeam(this);
  };
}

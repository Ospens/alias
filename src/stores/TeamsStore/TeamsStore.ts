import { makeAutoObservable, runInAction, autorun, IReactionDisposer, reaction } from "mobx";
import { storeData, getData } from "stores/AsyncStorage";
import { ALL_TEAMS } from "stores/TeamsStore/TeamsStore.utils";
import { Team } from "./Team";
import type { IRootStore } from "../RootStore";
import { TeamData } from "./TeamsStore.types";

class TeamsStore {
  public rootStore: IRootStore;

  public saveHandler: IReactionDisposer | null = null;

  public teams: Team[] = [];

  constructor(rootStore: IRootStore) {
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
        // store create an error: TypeError: cyclic object value
        this.teams.map((t) => ({ ...t, store: null })),
      );
    });

    reaction(
      () => this.rootStore.i18NStore.locale,
      (locale) => {
        this.updateTeams(locale.teamNames);
      },
    );
  }

  private generateTeamData = (): TeamData => {
    const notAvailableTeams = this.teams.map((team) => team.uuid);
    const teamIndex = ALL_TEAMS.findIndex(({ uuid }) => !notAvailableTeams.includes(uuid));
    return {
      name: this.rootStore.i18NStore.locale.teamNames[teamIndex] || `Team ${this.teams.length + 1}`,
      ...ALL_TEAMS[teamIndex],
    };
  };

  get hasAvailableTeam(): boolean {
    return this.teams.length < ALL_TEAMS.length;
  }

  public createTeam = (data: TeamData = this.generateTeamData()) => {
    const team = new Team(this, data);
    this.teams.push(team);
  };

  public updateTeams = (teamNames: string[]) => {
    this.teams.forEach((team, index) => {
      // eslint-disable-next-line no-param-reassign
      team.name = teamNames[index];
    });
  };

  public removeTeam = (team: Team) => {
    this.teams = this.teams.filter((t) => t.uuid !== team.uuid);
  };
}

export default TeamsStore;

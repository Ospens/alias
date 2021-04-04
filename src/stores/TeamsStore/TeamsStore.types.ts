export interface TeamData {
  uuid?: string;
  name: string;
  color?: string;
}

export interface ITeam {
  uuid: string;
  name: string;
  color: string;
  removeTeam: () => void;
}

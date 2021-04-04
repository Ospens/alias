export interface TeamData {
  uuid?: string;
  name?: string;
  color?: string;
  order: number;
}

export interface ITeam {
  uuid: string;
  name: string;
  color: string;
  points: number;
  rounds: number;
  order: number;
  removeTeam: () => void;
}

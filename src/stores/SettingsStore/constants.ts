import { RoundDuration, PointsForWin } from "./SettingsStore";

export const roundDurationSelectValues: {
  label: string;
  value: RoundDuration;
}[] = [
  { label: "30", value: 30 },
  { label: "60", value: 60 },
  { label: "90", value: 90 },
];

export const pointsForWinSelectValues: {
  label: string;
  value: PointsForWin;
}[] = [
  { label: "25", value: 25 },
  { label: "50", value: 50 },
  { label: "75", value: 75 },
  { label: "100", value: 100 },
];

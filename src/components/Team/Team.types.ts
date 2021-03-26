import type { Team } from "stores/TeamsStore";
import { StyleProp, ViewStyle } from "react-native";

export interface TeamProps {
  team: Team;
  containerStyle?: StyleProp<ViewStyle>;
}

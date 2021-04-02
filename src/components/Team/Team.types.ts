import { StyleProp, ViewStyle } from "react-native";
import { ITeam } from "stores/TeamsStore/TeamsStore.types";
import { ITeamGameInfo } from "stores/GameStore";

export interface TeamProps {
  team: ITeam;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface TeamWithScoreProps {
  team: ITeamGameInfo;
  containerStyle?: StyleProp<ViewStyle>;
}

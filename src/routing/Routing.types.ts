import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  GameSettings: undefined;
  Game: undefined;
  Overview: undefined;
};

type RootStack = keyof RootStackParamList;

export interface INavigatorProps<T extends RootStack> {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
}

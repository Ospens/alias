import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  WordSets: undefined;
  Game: NavigatorScreenParams<GameStackParamList>;
};

export type GameStackParamList = {
  Overview: undefined;
  Round: undefined;
  RoundResults: undefined;
};

type RootStack = keyof RootStackParamList;

export interface INavigatorProps<T extends RootStack> {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
}

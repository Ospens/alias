import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "screens/HomeScreen";
import SettingsScreen from "screens/SettingsScreen";
import WordSetsScreen from "screens/WordSetsScreen";
import { observer } from "mobx-react-lite";
import { useLocale } from "stores";
import { getScreenOptions } from "./Routing.utils";
import { GameRouting } from "./GameRouting";
import type { RootStackParamList } from "./Routing.types";

const Stack = createStackNavigator<RootStackParamList>();

const Routing = observer(() => {
  const locale = useLocale();
  const screenOptions = getScreenOptions(locale);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions.HOME}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={screenOptions.SETTINGS}
      />
      <Stack.Screen
        name="WordSets"
        component={WordSetsScreen}
        options={screenOptions.WORD_SETS}
      />
      <Stack.Screen
        name="Game"
        component={GameRouting}
        options={screenOptions.GAME_ROUTING}
      />
    </Stack.Navigator>
  );
});

export default Routing;

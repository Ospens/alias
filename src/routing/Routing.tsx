import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "screens/HomeScreen";
import SettingsScreen from "screens/SettingsScreen";
import WordSetsScreen from "screens/WordSetsScreen";
import OverviewScreen from "screens/OverviewScreen";
import GameScreen from "screens/GameScreen";
import { SCREEN_OPTIONS } from "./Routing.utils";
import type { RootStackParamList } from "./Routing.types";

const Stack = createStackNavigator<RootStackParamList>();

const Routing = memo(() => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={SCREEN_OPTIONS.HOME}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={SCREEN_OPTIONS.SETTINGS}
    />
    <Stack.Screen
      name="WordSets"
      component={WordSetsScreen}
      options={SCREEN_OPTIONS.WORD_SETS}
    />
    <Stack.Screen
      name="Overview"
      component={OverviewScreen}
      options={{ title: "Results" }}
    />
    <Stack.Screen
      name="Game"
      component={GameScreen}
      options={{ title: "Game", headerShown: false, gestureEnabled: false }}
    />
  </Stack.Navigator>
));

export default Routing;

import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "screens/HomeScreen";
import SettingsScreen from "screens/SettingsScreen";
import GameSettingsScreen from "screens/GameSettingsScreen";
import type { RootStackParamList } from "./Routing.types";

const Stack = createStackNavigator<RootStackParamList>();

const Routing = memo(() => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ title: "Settings" }}
    />
    <Stack.Screen
      name="GameSettings"
      component={GameSettingsScreen}
      options={{ title: "Game Settings" }}
    />
  </Stack.Navigator>
));

export default Routing;

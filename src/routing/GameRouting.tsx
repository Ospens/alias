import React, { memo } from "react";
import GameScreen from "screens/GameScreen";
import OverviewScreen from "screens/OverviewScreen";
import { SCREEN_OPTIONS } from "routing/Routing.utils";
import { createStackNavigator } from "@react-navigation/stack";
import { GameStackParamList } from "routing/Routing.types";
import GameStore from "stores/GameStore";
import { stores } from "stores";
import { GameStoreProvider } from "./GameRouting.store";

const GameStack = createStackNavigator<GameStackParamList>();

export const GameRouting = memo(() => (
  <GameStoreProvider value={new GameStore(stores.rootStore)}>
    <GameStack.Navigator initialRouteName="Overview">
      <GameStack.Screen
        name="Overview"
        component={OverviewScreen}
        options={SCREEN_OPTIONS.OVERVIEW}
      />
      <GameStack.Screen
        name="Round"
        component={GameScreen}
        options={{ title: "Game", headerShown: false, gestureEnabled: false }}
      />
    </GameStack.Navigator>
  </GameStoreProvider>
));

import React, { useRef } from "react";
import GameScreen from "screens/GameScreen";
import OverviewScreen from "screens/OverviewScreen";
import { SCREEN_OPTIONS } from "routing/Routing.utils";
import { createStackNavigator } from "@react-navigation/stack";
import { GameStackParamList } from "routing/Routing.types";
import GameStore from "stores/GameStore";
import { useRootStore } from "stores";
import { observer } from "mobx-react-lite";
import { GameStoreProvider } from "./GameRouting.store";

const GameStack = createStackNavigator<GameStackParamList>();

// TODO observer and memo not working. Need to check why
export const GameRouting = observer(() => {
  const {
    teamsStore: { teams },
    settingsStore: { penaltyForSkip, pointsForWin },
    wordsStore,
  } = useRootStore();

  const { current: gameStore } = useRef(
    new GameStore(wordsStore, teams, penaltyForSkip, pointsForWin)
  );

  return (
    <GameStoreProvider value={gameStore}>
      <GameStack.Navigator initialRouteName="Overview">
        <GameStack.Screen
          name="Overview"
          component={OverviewScreen}
          options={SCREEN_OPTIONS.OVERVIEW}
        />
        <GameStack.Screen
          name="Round"
          component={GameScreen}
          options={SCREEN_OPTIONS.OVERVIEW}
          // options={{ title: "Game", headerShown: false, gestureEnabled: false }}
        />
      </GameStack.Navigator>
    </GameStoreProvider>
  );
});

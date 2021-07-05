import React, { useMemo } from "react";
import GameScreen from "screens/GameScreen";
import OverviewScreen from "screens/OverviewScreen";
import RoundResultsScreen from "screens/RoundResultsScreen";
import GameStore from "stores/GameStore";
import { getScreenOptions } from "routing/Routing.utils";
import { createStackNavigator } from "@react-navigation/stack";
import { GameStackParamList } from "routing/Routing.types";
import { useLocale, useRootStore } from "stores";
import { observer } from "mobx-react-lite";
import { GameStoreProvider } from "./GameRouting.store";

const GameStack = createStackNavigator<GameStackParamList>();

// TODO: even with observer make rerenders
export const GameRouting = observer(() => {
  const {
    teamsStore: { teams },
    settingsStore: { penaltyForSkip, pointsForWin, roundDuration },
    wordsStore,
  } = useRootStore();

  const locale = useLocale();
  const screenOptions = getScreenOptions(locale);

  const gameStore = useMemo(
    () =>
      new GameStore(
        wordsStore,
        teams,
        penaltyForSkip,
        pointsForWin,
        roundDuration
      ),
    [penaltyForSkip, pointsForWin, roundDuration, teams, wordsStore]
  );

  return (
    <GameStoreProvider value={gameStore}>
      <GameStack.Navigator initialRouteName="Overview">
        <GameStack.Screen
          name="Overview"
          component={OverviewScreen}
          options={screenOptions.OVERVIEW}
        />
        <GameStack.Screen
          name="Round"
          component={GameScreen}
          options={screenOptions.ROUND}
        />
        <GameStack.Screen
          name="RoundResults"
          component={RoundResultsScreen}
          options={screenOptions.ROUND_RESULTS}
        />
      </GameStack.Navigator>
    </GameStoreProvider>
  );
});

GameRouting.displayName = "GameRouting";

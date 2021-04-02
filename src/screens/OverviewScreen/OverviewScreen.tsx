import React, { FC, useCallback, useMemo } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import { TeamWithScore } from "components/Team";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import {
  backButtonStyle,
  nextButtonStyle,
} from "screens/WordSetsScreen/WordSetsScreen.styles";
import styles from "./OverviewScreen.styles";

const OverviewScreen: FC<INavigatorProps<"Overview">> = observer(
  ({ navigation }) => {
    const { gameStore } = useStore("rootStore");

    const gotoGame = useCallback(() => {
      if (gameStore) {
        gameStore.startRound();
      }
      navigation.navigate("Game");
    }, [gameStore, navigation]);

    const gotoMenu = useCallback(() => {
      navigation.navigate("Home");
    }, [navigation]);

    if (gameStore === undefined) {
      // eslint-disable-next-line no-console
      console.error("gameStore is undefined");
      return null;
    }
    const { gameTeams, currentTeam, winner } = gameStore;

    const bottomPanel = useMemo(() => {
      return (
        <>
          <RectangleButton
            title="Назад"
            onPress={gotoMenu}
            style={backButtonStyle}
          />

          {winner ? (
            <RectangleButton
              title="Меню"
              onPress={gotoMenu}
              style={nextButtonStyle}
            />
          ) : (
            <RectangleButton
              title="Играть"
              onPress={gotoGame}
              style={nextButtonStyle}
            />
          )}
        </>
      );
    }, [gotoMenu, winner, gotoGame]);

    return (
      <MainLayout style={styles.container} bottomPanel={bottomPanel}>
        {winner && <Text>{`Team "${winner.name}" won`}</Text>}
        <Text>{`Очередь команды "${currentTeam.name}"`}</Text>
        {gameTeams.map((team) => {
          return (
            <TeamWithScore
              key={team.uuid}
              containerStyle={styles.teamWrapper}
              team={team}
            />
          );
        })}
      </MainLayout>
    );
  }
);

export default OverviewScreen;

import React, { FC, useCallback, useMemo } from "react";
import { ScrollView, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { TeamWithScore } from "components/Team";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import {
  backButtonStyle,
  nextButtonStyle,
} from "screens/WordSetsScreen/WordSetsScreen.styles";
import { useGameStore } from "routing/GameRouting.store";
import type { INavigatorProps } from "routing";
import styles from "./OverviewScreen.styles";

const OverviewScreen: FC<INavigatorProps<"Game">> = observer(
  ({ navigation: { navigate } }) => {
    const { startRound, gameTeams, currentTeam, winner } = useGameStore();

    const gotoGame = useCallback(() => {
      startRound();
      navigate("Game", {
        screen: "Round",
      });
    }, [navigate, startRound]);

    const gotoMenu = useCallback(() => {
      navigate("WordSets");
    }, [navigate]);

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
        <ScrollView>
          <Text style={styles.queueText}>
            {`Очередь команды "${currentTeam.name}"`}
          </Text>
          {gameTeams.map((team) => (
            <TeamWithScore
              key={team.uuid}
              containerStyle={styles.teamWrapper}
              team={team}
            />
          ))}
        </ScrollView>
        <Text style={styles.roundNumber}>Круг: 1</Text>
      </MainLayout>
    );
  }
);

export default OverviewScreen;

import React, { FC, useCallback, useEffect, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
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
  ({ navigation }) => {
    const { navigate, setOptions } = navigation;
    const { startRound, gameTeams, currentTeam, winner } = useGameStore();

    const gotoGame = useCallback(() => {
      startRound();
      navigate("Game", {
        screen: "Round",
      });
    }, [navigate, startRound]);

    useEffect(() => {
      if (winner) {
        setOptions({ title: "" });
      }
    }, [setOptions, winner]);

    const gotoMenu = useCallback(() => {
      navigate("WordSets");
    }, [navigate]);

    const bottomPanel = useMemo(() => {
      if (winner) {
        return (
          <RectangleButton
            title="Меню"
            onPress={gotoMenu}
            style={nextButtonStyle}
          />
        );
      }

      return (
        <>
          <RectangleButton
            title="Назад"
            onPress={gotoMenu}
            style={backButtonStyle}
          />
          <RectangleButton
            title="Играть"
            onPress={gotoGame}
            style={nextButtonStyle}
          />
        </>
      );
    }, [gotoMenu, winner, gotoGame]);

    return (
      <MainLayout style={styles.container} bottomPanel={bottomPanel}>
        {winner ? (
          <View style={styles.winnerWrapper}>
            <Text style={styles.winnerTeam}>
              <Text style={styles.tadaSmile}>&#127881;</Text>
              {`\n Победила команда "${winner.name}"`}
            </Text>
          </View>
        ) : (
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
        )}
      </MainLayout>
    );
  }
);

export default OverviewScreen;

import React, { FC, useCallback, useEffect, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import { TeamWithScore } from "components/Team";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import { useGameStore } from "routing/GameRouting.store";
import type { INavigatorProps } from "routing";
import { ArrowIcon } from "components/svg";
import { useLocale } from "stores";
import styles from "./OverviewScreen.styles";

const OverviewScreen: FC<INavigatorProps<"Game">> = observer(
  ({ navigation }) => {
    const locale = useLocale();
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
            style={styles.nextButton}
          />
        );
      }

      return (
        <>
          <RectangleButton
            isSquare
            onPress={gotoMenu}
            style={styles.backButton}
          >
            <ArrowIcon />
          </RectangleButton>
          <RectangleButton
            title={locale.actions.play}
            onPress={gotoGame}
            style={styles.nextButton}
          />
        </>
      );
    }, [winner, gotoMenu, locale.actions.play, gotoGame]);

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
              {`Очередь команды\n"${currentTeam.name}"`}
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

OverviewScreen.displayName = "OverviewScreen";

export default OverviewScreen;

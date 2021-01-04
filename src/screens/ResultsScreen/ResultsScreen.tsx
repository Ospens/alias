import React, { FC, useCallback } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import styles from "./ResultsScreen.styles";

const ResultsScreen: FC<INavigatorProps<"Results">> = observer(
  ({ navigation }) => {
    const { gameStore } = useStore("rootStore");

    const gotoGame = useCallback(() => {
      navigation.navigate("Game");
    }, [navigation]);

    if (gameStore === undefined) {
      console.error("gameStore is undefined");
      return null;
    }
    const { gameTeams, currentTeam } = gameStore;

    return (
      <View style={styles.container}>
        <Text>{`The next team is "${currentTeam?.name}"`}</Text>
        {gameTeams.map((team) => (
          <View key={team.uuid} style={styles.teamWrapper}>
            <Text
              style={[team.uuid === currentTeam?.uuid && styles.activeTeam]}
            >
              {team.name}
            </Text>
            <Text>{team.points}</Text>
          </View>
        ))}
        <Button title="Play" onPress={gotoGame} />
      </View>
    );
  }
);

export default ResultsScreen;

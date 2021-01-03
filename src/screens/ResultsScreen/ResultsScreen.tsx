import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import styles from "./ResultsScreen.styles";
import type { ResultsScreenProps } from "./ResultsScreen.types";

const ResultsScreen: FC<ResultsScreenProps> = observer(() => {
  const { gameStore } = useStore("rootStore");
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
          <Text style={[team.uuid === currentTeam?.uuid && styles.activeTeam]}>
            {team.name}
          </Text>
          <Text>{team.points}</Text>
        </View>
      ))}
      <Button title="Play" onPress={() => console.log("Play")} />
    </View>
  );
});

export default ResultsScreen;

import React, { FC, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import Team from "components/Team";
import styles from "./GameScreen.styles";
import type { GameScreenProps } from "./GameScreen.types";

const GameScreen: FC<GameScreenProps> = observer(() => {
  const {
    gameStore: { gameTeams, currentTeam, toggleCurrentTeam },
  } = useStore("rootStore");

  useEffect(() => {
    toggleCurrentTeam();
  }, [toggleCurrentTeam]);

  return (
    <View style={styles.container}>
      <Text>{`The next team is "${currentTeam?.name}"`}</Text>
      {gameTeams.map((team) => (
        <Team key={team.uuid} team={team} />
      ))}
      <Button title="Play" onPress={() => console.log("Play")} />
    </View>
  );
});

export default GameScreen;

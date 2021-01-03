import React, { FC, useCallback } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useStore } from "stores";
import Team from "components/Team";
import styles from "./HomeScreen.styles";

const HomeScreen: FC<INavigatorProps<"Home">> = observer(({ navigation }) => {
  const {
    createGameStore,
    teamsStore: { teams, createTeam },
  } = useStore("rootStore");

  const gotoGameSettings = useCallback(() => {
    createGameStore();
    navigation.navigate("GameSettings");
  }, [createGameStore, navigation]);

  return (
    <View style={styles.container}>
      <Text>Teams: </Text>
      {teams.map((team) => (
        <Team key={team.uuid} team={team} />
      ))}
      <Button title="Add team" onPress={createTeam} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button
        title="Choose words sets"
        onPress={gotoGameSettings}
        disabled={teams.length < 2}
      />
    </View>
  );
});

export default HomeScreen;

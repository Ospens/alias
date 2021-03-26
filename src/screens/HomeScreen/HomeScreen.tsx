import React, { FC, useCallback } from "react";
import { View, Button } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useStore } from "stores";
import Team from "components/Team";
import styles from "./HomeScreen.styles";

const HomeScreen: FC<INavigatorProps<"Home">> = observer(({ navigation }) => {
  const {
    teamsStore: { teams, createTeam, hasAvailableTeam },
  } = useStore("rootStore");

  const gotoSettings = useCallback(() => {
    navigation.navigate("Settings");
  }, [navigation]);

  const gotoGameSettings = useCallback(() => {
    navigation.navigate("GameSettings");
  }, [navigation]);

  const handleCreateTeam = useCallback(() => {
    createTeam();
  }, [createTeam]);

  return (
    <View style={styles.container}>
      <View>
        {teams.map((team) => (
          <Team key={team.uuid} team={team} />
        ))}
      </View>
      <Button
        title="Add team"
        onPress={handleCreateTeam}
        disabled={!hasAvailableTeam}
      />
      <Button title="Settings" onPress={gotoSettings} />
      <Button
        title="Choose words sets"
        onPress={gotoGameSettings}
        disabled={teams.length < 2}
      />
    </View>
  );
});

export default HomeScreen;

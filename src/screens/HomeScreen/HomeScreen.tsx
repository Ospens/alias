import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useStore } from "stores";
import Team from "components/Team";
import styles from "./HomeScreen.styles";

const HomeScreen: FC<INavigatorProps<"Home">> = observer(({ navigation }) => {
  const {
    teamsStore: { teams, createTeam },
  } = useStore("rootStore");
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
        onPress={() => navigation.navigate("GameSettings")}
        disabled={teams.length < 2}
      />
    </View>
  );
});

export default HomeScreen;

import React from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { ITeam } from "stores/TeamsStore";
import styles from "./Team.styles";

interface TeamItemProps {
  team: ITeam;
}

const Team = observer(({ team }: TeamItemProps) => {
  const {
    teamsStore: { removeTeam },
  } = useStore("rootStore");

  return (
    <View style={styles.container}>
      <Text>{team.name}</Text>
      <Button title="Remove" onPress={() => removeTeam(team)} />
    </View>
  );
});

export default Team;

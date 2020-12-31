import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import styles from "./Team.styles";
import type { TeamProps } from "./Team.types";

const Team: FC<TeamProps> = observer(({ team }) => {
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

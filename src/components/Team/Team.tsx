import React, { FC, useCallback, useMemo } from "react";
import { Text, Button } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { colors } from "themes";
import styles from "./Team.styles";
import type { TeamProps } from "./Team.types";

const backgroundGradientProps = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  locations: [0, 0.35],
};

const Team: FC<TeamProps> = observer(({ team }) => {
  const {
    teamsStore: { removeTeam },
  } = useStore("rootStore");

  const handleRemove = useCallback(() => {
    removeTeam(team);
  }, [removeTeam, team]);

  // TODO: the first color should be given from team
  const gradientColors = useMemo(
    () => [colors.teams.purple, colors.transparent],
    []
  );

  return (
    <LinearGradient
      {...backgroundGradientProps}
      colors={gradientColors}
      style={styles.container}
    >
      <Text style={styles.title}>{team.name}</Text>
      <Button title="R" onPress={handleRemove} />
    </LinearGradient>
  );
});

export default Team;

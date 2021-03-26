import React, { FC, useMemo } from "react";
import { Text, Button } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { observer } from "mobx-react-lite";
import { colors } from "themes";
import styles from "./Team.styles";
import type { TeamProps } from "./Team.types";

const backgroundGradientProps = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  locations: [0, 0.35],
};

const Team: FC<TeamProps> = observer(({ team }) => {
  const gradientColors = useMemo(() => [team.color, colors.transparent], [
    team.color,
  ]);

  return (
    <LinearGradient
      {...backgroundGradientProps}
      colors={gradientColors}
      style={styles.container}
    >
      <Text style={styles.title}>{team.name}</Text>
      <Button title="R" onPress={team.removeTeam} />
    </LinearGradient>
  );
});

export default Team;

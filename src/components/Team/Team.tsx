import React, { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { observer } from "mobx-react-lite";
import { colors } from "themes";
import { CloseIcon } from "components/svg";
import styles from "./Team.styles";
import type { TeamProps } from "./Team.types";

const backgroundGradientProps = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  locations: [0, 0.35],
};

const Team = observer(({ team, containerStyle }: TeamProps) => {
  const gradientColors = useMemo(() => [team.color, colors.transparent], [
    team.color,
  ]);

  const wrapperStyle = useMemo(() => [styles.container, containerStyle], [
    containerStyle,
  ]);

  return (
    <LinearGradient
      {...backgroundGradientProps}
      colors={gradientColors}
      style={wrapperStyle}
    >
      <Text style={styles.title}>{team.name}</Text>
      <TouchableOpacity onPress={team.removeTeam}>
        <CloseIcon fill={colors.pink} />
      </TouchableOpacity>
    </LinearGradient>
  );
});

export default Team;

import React, { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { observer } from "mobx-react-lite";
import { colors } from "themes";
import { CloseIcon } from "components/svg";
import styles from "./Team.styles";
import type { TeamProps } from "./Team.types";
import { backgroundGradientProps } from "./Team.utils";

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

Team.displayName = "Team";

export default Team;

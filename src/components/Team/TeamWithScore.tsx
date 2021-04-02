import React, { useMemo } from "react";
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { observer } from "mobx-react-lite";
import { colors } from "themes";
import { useStore } from "stores";
import styles from "./Team.styles";
import type { TeamWithScoreProps } from "./Team.types";
import { backgroundGradientProps } from "./Team.utils";

const TeamWithScore = observer(
  ({ team, containerStyle }: TeamWithScoreProps) => {
    const { currentTeam } = useStore("rootStore").gameStore!;
    const gradientColors = useMemo(() => [team.color, colors.transparent], [
      team.color,
    ]);

    const wrapperStyle = useMemo(() => [styles.container, containerStyle], [
      containerStyle,
    ]);

    const isCurrentTeam = team.uuid === currentTeam.uuid;
    return (
      <LinearGradient
        {...backgroundGradientProps}
        colors={gradientColors}
        style={[wrapperStyle, { opacity: isCurrentTeam ? 1 : 0.5 }]}
      >
        <Text style={styles.title}>{team.name}</Text>
        <Text style={styles.score}>{team.points}</Text>
      </LinearGradient>
    );
  }
);

export default TeamWithScore;

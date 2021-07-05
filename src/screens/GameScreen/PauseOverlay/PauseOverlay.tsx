import React, { FC, memo, useCallback } from "react";
import { View } from "react-native";
import RectangleButton from "components/ReactangleButton";
import { useNavigation } from "@react-navigation/native";
import styles from "./PauseOverlay.styles";
import type { PauseOverlayProps } from "./PauseOverlay.types";

const PauseOverlay: FC<PauseOverlayProps> = memo(({ onResume, isPaused }) => {
  const { navigate } = useNavigation();

  const gotoHome = useCallback(() => {
    navigate("Home");
  }, [navigate]);

  if (!isPaused) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RectangleButton
        title="Продолжить"
        onPress={onResume}
        style={styles.resumeButton}
        textStyle={styles.resumeButtonTitle}
      />
      <RectangleButton
        title="Выйти"
        onPress={gotoHome}
        style={styles.menuButton}
        textStyle={styles.menuButtonTitle}
      />
    </View>
  );
});

PauseOverlay.displayName = "PauseOverlay";

export default PauseOverlay;

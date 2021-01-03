import React, { FC } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import styles from "./GameScreen.styles";
import type { GameScreenProps } from "./GameScreen.types";

const GameScreen: FC<GameScreenProps> = observer(() => {
  const { gameStore } = useStore("rootStore");
  if (gameStore === undefined) {
    console.error("gameStore is undefined");
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>GameScreen</Text>
    </View>
  );
});

export default GameScreen;

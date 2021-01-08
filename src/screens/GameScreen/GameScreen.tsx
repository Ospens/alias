import React, { FC, useCallback } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordCard from "components/WordCard";
import Timer from "components/Timer";
import styles from "./GameScreen.styles";

const GameScreen: FC<INavigatorProps<"Game">> = observer(() => {
  const {
    settingsStore: { roundDuration },
    gameStore,
  } = useStore("rootStore");

  const onExpire = useCallback(() => {
    console.log("onExpire");
  }, []);
  if (gameStore === undefined) {
    console.error("gameStore is undefined");
    return null;
  }
  const { currentTeam, currentWord, onDecline, onGuess } = gameStore;

  return (
    <View style={styles.container}>
      <Text>{`Очки: ${currentTeam.points}`}</Text>
      <Timer seconds={roundDuration} onExpire={onExpire} />

      {currentWord ? (
        <WordCard word={currentWord} onGuess={onGuess} onDecline={onDecline} />
      ) : (
        <Text>Слова закончились :(</Text>
      )}

      <Text>Не отгадали</Text>
      <Text>Отгадали</Text>

      <Text>Отгадано: 0</Text>
      <Text>Пропущено: 0</Text>
    </View>
  );
});

export default GameScreen;

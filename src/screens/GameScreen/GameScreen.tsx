import React, { FC } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordCard from "components/WordCard";
import styles from "./GameScreen.styles";

const GameScreen: FC<INavigatorProps<"Game">> = observer(() => {
  const {
    settingsStore: { roundDuration },
    gameStore,
  } = useStore("rootStore");

  if (gameStore === undefined) {
    console.error("gameStore is undefined");
    return null;
  }
  const { currentTeam, currentWord, onDecline, onGuess } = gameStore;

  return (
    <View style={styles.container}>
      <Text>{`Время: ${roundDuration}`}</Text>
      <Text>{currentTeam.points}</Text>

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

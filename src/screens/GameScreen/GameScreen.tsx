import React, { FC, useCallback } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordCard from "components/WordCard";
import Timer from "components/Timer";
import RoundResults from "./RoundResults";
import styles from "./GameScreen.styles";

const GameScreen: FC<INavigatorProps<"Game">> = observer(() => {
  const {
    settingsStore: { roundDuration },
    gameStore,
  } = useStore("rootStore");

  const onExpire = useCallback(() => {
    if (gameStore) {
      gameStore.onTimeOver();
    }
  }, [gameStore]);

  if (gameStore === undefined) {
    // eslint-disable-next-line no-console
    console.error("gameStore is undefined");
    return null;
  }
  const {
    currentTeam,
    currentWord,
    onDecline,
    onGuess,
    showResults,
  } = gameStore;

  if (showResults) {
    return (
      <SafeAreaView style={styles.container}>
        <RoundResults />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2 }}>
        <Timer seconds={roundDuration} onExpire={onExpire} />
      </View>

      <View style={styles.wordCardWrapper}>
        {currentWord ? (
          <WordCard
            word={currentWord.value}
            onGuess={onGuess}
            onDecline={onDecline}
          />
        ) : (
          <Text>Слова закончились :(</Text>
        )}
      </View>

      <View style={{ flex: 2 }}>
        <Text>Пропущено: 0</Text>
        <Text>{`Очки: ${currentTeam.points}`}</Text>
        <Text>Отгадано: 0</Text>
      </View>
    </SafeAreaView>
  );
});

export default GameScreen;

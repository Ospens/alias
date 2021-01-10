import React, { FC, useCallback } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordCard from "components/WordCard";
import Timer from "components/Timer";
import RoundResults from "components/RoundResults";
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2 }}>
        <Timer seconds={roundDuration} onExpire={onExpire} />
      </View>

      {!showResults ? (
        <View style={styles.wordCardWrapper}>
          {currentWord ? (
            <WordCard
              word={currentWord}
              onGuess={onGuess}
              onDecline={onDecline}
            />
          ) : (
            <Text>Слова закончились :(</Text>
          )}
        </View>
      ) : (
        <RoundResults />
      )}

      <View style={{ flex: 2 }}>
        <Text>Пропущено: 0</Text>
        <Text>{`Очки: ${currentTeam.points}`}</Text>
        <Text>Отгадано: 0</Text>
      </View>
    </SafeAreaView>
  );
});

export default GameScreen;

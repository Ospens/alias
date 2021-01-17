import React, { FC, useCallback, useMemo, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordCard from "components/WordCard";
import Timer from "components/Timer";
import RoundResults from "./RoundResults";
import styles from "./GameScreen.styles";

const GameScreen: FC<INavigatorProps<"Game">> = observer(({ navigation }) => {
  const {
    settingsStore: { roundDuration },
    gameStore,
  } = useStore("rootStore");

  const onExpire = useCallback(() => {
    if (gameStore) {
      gameStore.onTimeOver();
    }
  }, [gameStore]);

  useEffect(() => {
    // TODO: change any type. Event type is to difficult
    const onGoBack = (e: any) => {
      e.preventDefault();
    };
    navigation.addListener("beforeRemove", onGoBack);
    return () => {
      navigation.removeListener("beforeRemove", onGoBack);
    };
  }, [navigation]);

  if (gameStore === undefined) {
    // eslint-disable-next-line no-console
    console.error("gameStore is undefined");
    return null;
  }

  const {
    wordsFromRound,
    currentTeam,
    currentWord,
    onDecline,
    onGuess,
    showResults,
  } = gameStore;

  const guessedLength = useMemo(() => {
    return wordsFromRound.filter((w) => w.status === "GUESSED").length;
  }, [wordsFromRound]);

  const declinedLength = useMemo(() => {
    return wordsFromRound.filter((w) => w.status === "DECLINED").length;
  }, [wordsFromRound]);

  if (showResults) {
    return (
      <SafeAreaView style={styles.container}>
        <RoundResults />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.timerWrapper}>
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

      <View style={styles.statsWrapper}>
        <Text>{`Пропущено: ${declinedLength}`}</Text>
        <Text>{`Очки: ${currentTeam.points}`}</Text>
        <Text>{`Отгадано: ${guessedLength}`}</Text>
      </View>
    </SafeAreaView>
  );
});

export default GameScreen;

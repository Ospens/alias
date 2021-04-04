import React, { useMemo } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordCard from "components/WordCard";
import Timer from "components/Timer";
import { useGameStore } from "routing/GameRouting.store";
import styles from "./GameScreen.styles";
import RoundResults from "./RoundResults";

const GameScreen = observer(({ navigation }: INavigatorProps<"Game">) => {
  const {
    settingsStore: { roundDuration },
  } = useStore("rootStore");
  const {
    handleTimeOver,
    wordsFromRound,
    currentTeam,
    currentWord,
    onDecline,
    onGuess,
    showResults,
  } = useGameStore();

  const guessedLength = useMemo(() => {
    return wordsFromRound.filter((w) => w.status === "GUESSED").length || 0;
  }, [wordsFromRound]);

  const declinedLength = useMemo(() => {
    return wordsFromRound.filter((w) => w.status === "DECLINED").length || 0;
  }, [wordsFromRound]);

  // useEffect(() => {
  //   // TODO: change any type. Event type is to difficult
  //   const onGoBack = (e: any) => {
  //     e.preventDefault();
  //   };
  //   navigation.addListener("beforeRemove", onGoBack);
  //   return () => {
  //     navigation.removeListener("beforeRemove", onGoBack);
  //   };
  // }, [navigation]);

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
        <Timer seconds={roundDuration} onExpire={handleTimeOver} />
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

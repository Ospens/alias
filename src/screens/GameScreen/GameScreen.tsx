import React, { useMemo } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import WordCard from "components/WordCard";
import Timer from "components/Timer";
import { useGameStore } from "routing/GameRouting.store";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import styles from "./GameScreen.styles";
import RoundResults from "./RoundResults";

const GameScreen = observer(() => {
  const {
    settingsStore: { roundDuration },
  } = useStore("rootStore");

  const {
    guessedCount,
    declinedCount,
    handleTimeOver,
    currentTeam,
    currentWord,
    declineCurrentWord,
    guessCurrentWord,
    showResults,
  } = useGameStore();

  const bottomPanel = useMemo(() => {
    return (
      <>
        <RectangleButton
          title="Пропустить"
          onPress={declineCurrentWord}
          style={styles.declineButton}
          textStyle={styles.declineButtonTitle}
        />
        <RectangleButton
          title="Правильно"
          onPress={guessCurrentWord}
          style={styles.guessButton}
          textStyle={styles.guessButtonTitle}
        />
      </>
    );
  }, [declineCurrentWord, guessCurrentWord]);

  if (showResults) {
    return (
      <SafeAreaView style={styles.container}>
        <RoundResults />
      </SafeAreaView>
    );
  }

  return (
    <MainLayout bottomPanel={bottomPanel}>
      <View style={styles.timerWrapper}>
        <Timer seconds={roundDuration} onExpire={handleTimeOver} />
      </View>

      <View style={styles.wordCardWrapper}>
        {currentWord ? (
          <WordCard word={currentWord} />
        ) : (
          <Text>Слова закончились :(</Text>
        )}
      </View>

      <View style={styles.statsWrapper}>
        <Text>{`Пропущено: ${declinedCount}`}</Text>
        <Text>{`Очки: ${currentTeam.points}`}</Text>
        <Text>{`Отгадано: ${guessedCount}`}</Text>
      </View>
    </MainLayout>
  );
});

export default GameScreen;

import React, { useMemo } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import WordCard from "components/WordCard";
import Timer from "components/Timer";
import { useGameStore } from "routing/GameRouting.store";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import { PauseIcon } from "components/svg";
import { colors } from "themes";
import styles from "./GameScreen.styles";
import RoundResults from "./RoundResults";

const GameScreen = observer(() => {
  const {
    settingsStore: { roundDuration },
  } = useStore("rootStore");

  const {
    handleTimeOver,
    currentWord,
    declineCurrentWord,
    guessCurrentWord,
    showResults,
    currentTeam,
    pointsForWin,
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
      <View style={styles.topWrapper}>
        <TouchableOpacity style={styles.pauseButton}>
          <PauseIcon fill={colors.yellow} />
        </TouchableOpacity>
        <Timer seconds={roundDuration} onExpire={handleTimeOver} />
        <Text style={styles.score}>
          <Text style={styles.currentScore}>{`${currentTeam.points}/`}</Text>
          {pointsForWin}
        </Text>
      </View>

      <View style={styles.wordCardWrapper}>
        {currentWord ? (
          <WordCard word={currentWord} />
        ) : (
          <Text>Слова закончились :(</Text>
        )}
      </View>
    </MainLayout>
  );
});

export default GameScreen;

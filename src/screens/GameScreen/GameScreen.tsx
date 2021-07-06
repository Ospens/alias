import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { observer } from "mobx-react-lite";
import WordCard from "components/WordCard";
import Timer from "components/Timer";
import type { TimerRef } from "components/Timer";
import { useGameStore } from "routing/GameRouting.store";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import { PauseIcon } from "components/svg";
import { colors } from "themes";
import PauseOverlay from "screens/GameScreen/PauseOverlay";
import type { INavigatorProps } from "routing";
import { useLocale } from "stores";
import styles from "./GameScreen.styles";

const GameScreen = observer(({ navigation }: INavigatorProps<"Game">) => {
  const locale = useLocale();
  const {
    handleTimeOver,
    currentWord,
    declineCurrentWord,
    guessCurrentWord,
    currentTeam,
    pointsForWin,
    roundDuration,
    pointsFromRound,
  } = useGameStore();

  const timerRef = useRef<TimerRef>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleDeclineCurrentWord = useCallback(() => {
    declineCurrentWord().then((showResults) => {
      if (showResults) {
        navigation.navigate("Game", {
          screen: "RoundResults",
        });
      }
    });
  }, [declineCurrentWord, navigation]);

  const handleGuessCurrentWord = useCallback(() => {
    guessCurrentWord().then((showResults) => {
      if (showResults) {
        navigation.navigate("Game", {
          screen: "RoundResults",
        });
      }
    });
  }, [guessCurrentWord, navigation]);

  const pauseTimer = useCallback(() => {
    timerRef.current?.pause();
    setIsPaused(true);
  }, []);

  const resumeTimer = useCallback(() => {
    timerRef.current?.start();
    setIsPaused(false);
  }, []);

  const bottomPanel = useMemo(() => {
    return (
      <>
        <RectangleButton
          title={locale.actions.skip}
          onPress={handleDeclineCurrentWord}
          style={styles.declineButton}
          textStyle={styles.declineButtonTitle}
        />
        <RectangleButton
          title={locale.actions.guess}
          onPress={handleGuessCurrentWord}
          style={styles.guessButton}
          textStyle={styles.guessButtonTitle}
        />
      </>
    );
  }, [
    handleDeclineCurrentWord,
    handleGuessCurrentWord,
    locale.actions.guess,
    locale.actions.skip,
  ]);

  return (
    <>
      <MainLayout bottomPanel={bottomPanel}>
        <View style={styles.topWrapper}>
          <TouchableOpacity style={styles.pauseButton} onPress={pauseTimer}>
            <PauseIcon fill={colors.yellow} />
          </TouchableOpacity>
          <Timer
            seconds={roundDuration}
            onExpire={handleTimeOver}
            ref={timerRef}
          />
          <Text style={styles.score}>
            <Text style={styles.currentScore}>
              {`${currentTeam.points + pointsFromRound}/`}
            </Text>
            {pointsForWin}
          </Text>
        </View>
        <View style={styles.wordCardWrapper}>
          {currentWord && <WordCard word={currentWord} />}
        </View>
      </MainLayout>
      <PauseOverlay isPaused={isPaused} onResume={resumeTimer} />
    </>
  );
});

GameScreen.displayName = "GameScreen";

export default GameScreen;

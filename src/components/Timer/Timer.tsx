import React, { forwardRef, memo, useEffect, useImperativeHandle } from "react";
import { View, Text } from "react-native";
import useTimer from "utils/useTimer";
import styles from "./Timer.styles";
import type { TimerProps, TimerRef } from "./Timer.types";

const Timer = forwardRef<TimerRef, TimerProps>(({ seconds, onExpire }, ref) => {
  const { start: startTimer, seconds: timerSeconds, pause } = useTimer({
    seconds,
    onExpire,
  });

  useImperativeHandle(
    ref,
    (): TimerRef => ({
      pause,
      start: startTimer,
    }),
    [pause, startTimer]
  );

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return (
    <View style={styles.container}>
      <Text style={styles.seconds}>{timerSeconds}</Text>
    </View>
  );
});

export default memo(Timer);

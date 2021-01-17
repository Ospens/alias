import React, { FC, memo, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useTimer from "utils/useTimer";
import ProgressBar from "components/ProgressBar";
import styles from "./Timer.styles";
import type { TimerProps } from "./Timer.types";

const Timer: FC<TimerProps> = memo(({ seconds, onExpire }) => {
  const { start: timerStart, seconds: timerSeconds, pause } = useTimer({
    seconds,
    onExpire,
  });

  useEffect(() => {
    timerStart();
  }, [timerStart]);

  return (
    <View style={styles.container}>
      <Text>{`Время: ${timerSeconds}`}</Text>
      <ProgressBar maxValue={seconds} currentValue={timerSeconds} />
      <Button title="Pause" onPress={pause} />
      <Button title="Continue" onPress={timerStart} />
    </View>
  );
});

export default Timer;

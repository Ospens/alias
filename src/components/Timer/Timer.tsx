import React, { FC, memo, useEffect } from "react";
import { View, Text } from "react-native";
import useTimer from "utils/useTimer";
import styles from "./Timer.styles";
import type { TimerProps } from "./Timer.types";

const Timer: FC<TimerProps> = memo(({ seconds, onExpire }) => {
  const { start: timerStart, seconds: timerSeconds } = useTimer({
    seconds,
    onExpire,
  });

  useEffect(() => {
    timerStart();
  }, [timerStart]);

  return (
    <View style={styles.container}>
      <Text>{`Время: ${timerSeconds}`}</Text>
    </View>
  );
});

export default Timer;

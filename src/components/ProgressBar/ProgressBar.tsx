import React, { FC, memo, useState, useEffect, useMemo } from "react";
import { View } from "react-native";
import styles from "./ProgressBar.styles";
import type { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar: FC<ProgressBarProps> = memo(({ maxValue, currentValue }) => {
  const currentProgress = useMemo(() => {
    if (currentValue >= maxValue) {
      return maxValue;
    }
    if (currentValue <= 0) {
      return 0;
    }
    return currentValue;
  }, [currentValue, maxValue]);

  const [maxProgress, setMaxProgress] = useState(maxValue);

  useEffect(() => {
    setMaxProgress(maxValue);
  }, [maxValue]);

  const doneWidth = (currentProgress / maxProgress) * 100;

  const emptyLineStyle = useMemo(() => {
    const emptyWidth = 100 - doneWidth;
    return {
      ...styles.emptyLine,
      borderTopStartRadius: emptyWidth === 100 ? 10 : 0,
      borderBottomStartRadius: emptyWidth === 100 ? 10 : 0,
      width: `${emptyWidth}%`,
    };
  }, [doneWidth]);

  return (
    <View style={styles.container}>
      <View style={[styles.doneLine, { width: `${doneWidth}%` }]} />
      <View style={emptyLineStyle} />
    </View>
  );
});

export default ProgressBar;

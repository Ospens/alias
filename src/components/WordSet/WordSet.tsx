import React, { FC, memo, useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./WordSet.styles";
import type { WordSetProps } from "./WordSet.types";

const WordSet: FC<WordSetProps> = memo(({ group, checked, onToggle }) => {
  const onPress = useCallback(() => {
    if (onToggle) {
      onToggle(group.id);
    }
  }, [group.id, onToggle]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{group.name}</Text>
      {checked && <Text>Checked</Text>}
    </TouchableOpacity>
  );
});

export default WordSet;

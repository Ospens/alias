import React, { FC, memo, useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./WordsGroup.styles";
import type { WordsGroupProps } from "./WordsGroup.types";

const WordsGroup: FC<WordsGroupProps> = memo(({ group, checked, onToggle }) => {
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

export default WordsGroup;

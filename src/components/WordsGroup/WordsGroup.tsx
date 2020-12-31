import React, { FC, memo, useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./WordsGroup.styles";
import type { WordsGroupProps } from "./WordsGroup.types";

const WordsGroup: FC<WordsGroupProps> = memo(
  ({ group, onPress: onPressProps }) => {
    const onPress = useCallback(() => {
      if (onPressProps) {
        onPressProps();
      }
      console.log(group.name);
    }, [group.name, onPressProps]);
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text>{group.name}</Text>
      </TouchableOpacity>
    );
  }
);

export default WordsGroup;

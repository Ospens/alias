import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { observer } from "mobx-react-lite";
import styles from "./WordSet.styles";
import type { WordSetProps } from "./WordSet.types";

const WordSet: FC<WordSetProps> = observer(({ set }) => {
  return (
    <TouchableOpacity onPress={set.toggleCheck} style={styles.container}>
      <Text>{set.name}</Text>
      {set.checked && <Text>Checked</Text>}
    </TouchableOpacity>
  );
});

export default WordSet;

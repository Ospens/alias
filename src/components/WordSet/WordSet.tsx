import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react-lite";
import styles from "./WordSet.styles";
import type { WordSetProps } from "./WordSet.types";

const WordSet: FC<WordSetProps> = observer(({ set, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={set.toggleCheck}
      style={[styles.container, containerStyle]}
    >
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>{set.name}</Text>
        <View style={styles.subInfo}>
          <Text style={styles.wordsCount}>{`${set.words.length} слов`}</Text>
          <Text style={styles.exampleWords}>{set.exampleWords.join(", ")}</Text>
        </View>
      </View>
      <View style={styles.checkWrapper}>
        {/* {set.checked && <Text>Checked</Text>} */}
        <Text>Checked</Text>
      </View>
    </TouchableOpacity>
  );
});

export default WordSet;

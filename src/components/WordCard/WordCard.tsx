import React, { FC } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import styles from "./WordCard.styles";
import type { WordCardProps } from "./WordCard.types";

const WordCard: FC<WordCardProps> = observer(({ word }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.word}>{word.value}</Text>
      </View>
      <View style={styles.nextCard} />
    </View>
  );
});

export default WordCard;

import React, { FC, memo } from "react";
import { View, Text } from "react-native";
import styles from "./WordCard.styles";
import type { WordCardProps } from "./WordCard.types";

const WordCard: FC<WordCardProps> = memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>Слово</Text>
    </View>
  );
});

export default WordCard;

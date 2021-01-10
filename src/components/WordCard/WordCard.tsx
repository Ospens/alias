import React, { FC, memo, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./WordCard.styles";
import type { WordCardProps } from "./WordCard.types";

const WordCard: FC<WordCardProps> = memo(
  ({ word, onGuess: onGuessProp, onDecline: onDeclineProp }) => {
    const onGuess = useCallback(() => {
      onGuessProp(word);
    }, [onGuessProp, word]);
    const onDecline = useCallback(() => {
      onDeclineProp(word);
    }, [onDeclineProp, word]);

    return (
      <View style={styles.container}>
        <Text style={styles.word}>{word.value}</Text>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            onPress={onDecline}
            style={[styles.button, styles.decline]}
          >
            <Text>onDecline</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onGuess}
            style={[styles.button, styles.guess]}
          >
            <Text>onGuess</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

export default WordCard;
import React, { FC, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { RoundResultsProps } from "./RoundResults.types";
import styles from "./RoundResults.styles";
import WordRow from "./WordRow";

const RoundResults: FC<RoundResultsProps> = observer(() => {
  const { gameStore } = useStore("rootStore");
  const navigation = useNavigation();
  const onSave = useCallback(() => {
    if (gameStore) {
      gameStore.saveResultsAndPrepareNextRound();
    }
    navigation.goBack();
  }, [gameStore, navigation]);

  if (gameStore === undefined) {
    console.error("gameStore is undefined");
    return null;
  }
  const { wordsFromRound } = gameStore;

  return (
    <View style={styles.container}>
      {wordsFromRound.map((word) => {
        return <WordRow key={word.id} word={word} />;
      })}
      <TouchableOpacity onPress={onSave}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
});

export default RoundResults;

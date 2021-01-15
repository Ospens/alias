import React, { FC, useCallback } from "react";
import { View, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { IWordsFromRound } from "stores/GameStore";
import type { RoundResultsProps } from "./RoundResults.types";
import styles from "./RoundResults.styles";
import WordRow from "./WordRow";

const renderWordRow = ({ item }: { item: IWordsFromRound }) => {
  return <WordRow word={item} />;
};

const RoundResults: FC<RoundResultsProps> = observer(() => {
  const { gameStore } = useStore("rootStore");
  const navigation = useNavigation();
  const onSave = useCallback(() => {
    if (gameStore) {
      gameStore.saveResultsAndPrepareNextRound();
    }
    navigation.goBack();
  }, [gameStore, navigation]);

  const wordKeyExtractor = useCallback(
    (word: IWordsFromRound) => word.value,
    []
  );

  if (gameStore === undefined) {
    // eslint-disable-next-line no-console
    console.error("gameStore is undefined");
    return null;
  }
  const { wordsFromRound } = gameStore;

  return (
    <View style={styles.container}>
      <FlatList
        data={wordsFromRound}
        renderItem={renderWordRow}
        keyExtractor={wordKeyExtractor}
      />
      <Button onPress={onSave} title="Save" />
    </View>
  );
});

export default RoundResults;

import React, { FC, useCallback } from "react";
import { View, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { IWordsFromRound } from "stores/GameStore";
import { useGameStore } from "routing/GameRouting.store";
import type { RoundResultsProps } from "./RoundResults.types";
import styles from "./RoundResults.styles";
import WordRow from "./WordRow";

const renderWordRow = ({ item }: { item: IWordsFromRound }) => {
  return <WordRow word={item} />;
};

const RoundResults: FC<RoundResultsProps> = observer(() => {
  const { saveResultsAndPrepareNextRound, wordsFromRound } = useGameStore();
  const navigation = useNavigation();

  const onSave = useCallback(() => {
    if (saveResultsAndPrepareNextRound) {
      saveResultsAndPrepareNextRound();
    }
    navigation.goBack();
  }, [saveResultsAndPrepareNextRound, navigation]);

  const wordKeyExtractor = useCallback(
    (word: IWordsFromRound) => word.value,
    []
  );

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

import React, { FC, useCallback, useMemo } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { IWordsFromRound } from "stores/GameStore";
import { useGameStore } from "routing/GameRouting.store";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import type { RoundResultsScreenProps } from "./RoundResultsScreen.types";
import styles from "./RoundResultsScreen.styles";
import WordRow from "./WordRow";

const renderWordRow = ({ item }: { item: IWordsFromRound }) => {
  return <WordRow word={item} />;
};

const RoundResultsScreen: FC<RoundResultsScreenProps> = observer(() => {
  const {
    saveResultsAndPrepareNextRound,
    wordsFromRound,
    startRound,
  } = useGameStore();
  const navigation = useNavigation();

  const handleSave = useCallback(() => {
    saveResultsAndPrepareNextRound();
    navigation.navigate("Game", {
      screen: "Overview",
    });

    startRound();
  }, [saveResultsAndPrepareNextRound, navigation, startRound]);

  const wordKeyExtractor = useCallback(
    (word: IWordsFromRound) => word.value,
    []
  );

  const bottomPanel = useMemo(() => {
    return (
      <RectangleButton
        title="Сохранить"
        onPress={handleSave}
        style={styles.saveButton}
      />
    );
  }, [handleSave]);

  return (
    <MainLayout bottomPanel={bottomPanel}>
      <View style={styles.container}>
        <FlatList
          data={wordsFromRound}
          renderItem={renderWordRow}
          keyExtractor={wordKeyExtractor}
        />
      </View>
    </MainLayout>
  );
});

export default RoundResultsScreen;

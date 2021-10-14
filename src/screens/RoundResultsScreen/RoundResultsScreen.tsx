import React, { FC, useCallback, useMemo } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { IWordsFromRound } from "stores/GameStore";
import { useGameStore } from "routing/GameRouting.store";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import { useLocale } from "stores";
import type { RoundResultsScreenProps } from "./RoundResultsScreen.types";
import styles from "./RoundResultsScreen.styles";
import WordRow from "./WordRow";

const renderWordRow = ({ item }: { item: IWordsFromRound }) => {
  return <WordRow word={item} />;
};

const RoundResultsScreen: FC<RoundResultsScreenProps> = observer(() => {
  const locale = useLocale();
  const { saveResults, wordsFromRound, startRound } = useGameStore();
  const navigation = useNavigation();

  const handleSave = useCallback(() => {
    saveResults();
    navigation.navigate("Game", {
      screen: "Overview",
    });

    startRound();
  }, [saveResults, navigation, startRound]);

  const wordKeyExtractor = useCallback((word: IWordsFromRound) => word.value, []);

  const bottomPanel = useMemo(() => {
    return (
      <RectangleButton title={locale.actions.save} onPress={handleSave} style={styles.saveButton} />
    );
  }, [handleSave, locale.actions.save]);

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

RoundResultsScreen.displayName = "RoundResultsScreen";

export default RoundResultsScreen;

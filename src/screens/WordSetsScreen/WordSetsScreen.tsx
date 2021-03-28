import React, { FC, useCallback } from "react";
import { Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordSet from "components/WordSet";
import MainLayout from "components/MainLayout";
import styles from "./WordSetsScreen.styles";

const WordSetsScreen: FC<INavigatorProps<"WordSets">> = observer(
  ({ navigation }) => {
    const {
      createGameStore,
      wordsStore: { wordSets },
    } = useStore("rootStore");

    const gotoGame = useCallback(() => {
      createGameStore();
      navigation.navigate("Overview");
    }, [createGameStore, navigation]);

    const checkedGroups = wordSets.filter((g) => g.checked);

    return (
      <MainLayout style={styles.container}>
        {wordSets.map((set) => (
          <WordSet
            key={set.id}
            set={set}
            containerStyle={styles.wordContainer}
          />
        ))}
        <Button
          title="Start game"
          onPress={gotoGame}
          disabled={checkedGroups.length < 1}
        />
      </MainLayout>
    );
  }
);

export default WordSetsScreen;

import React, { FC, useCallback, useMemo } from "react";
import { Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordSet from "components/WordSet";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import styles, {
  backButtonStyle,
  nextButtonStyle,
} from "./WordSetsScreen.styles";

const WordSetsScreen: FC<INavigatorProps<"WordSets">> = observer(
  ({ navigation }) => {
    const {
      createGameStore,
      wordsStore: { wordSets },
    } = useStore("rootStore");

    const goBack = useCallback(() => {
      navigation.goBack();
    }, [navigation]);

    const gotoGame = useCallback(() => {
      createGameStore();
      navigation.navigate("Overview");
    }, [createGameStore, navigation]);

    const checkedGroups = wordSets.filter((g) => g.checked);

    const bottomPanel = useMemo(() => {
      return (
        <>
          <RectangleButton
            title="Назад"
            onPress={goBack}
            style={backButtonStyle}
          />
          <RectangleButton
            title="Далее"
            onPress={gotoGame}
            style={nextButtonStyle}
            disabled={checkedGroups.length < 1}
          />
        </>
      );
    }, [checkedGroups.length, goBack, gotoGame]);

    return (
      <MainLayout style={styles.container} bottomPanel={bottomPanel}>
        {wordSets.map((set) => (
          <WordSet
            key={set.id}
            set={set}
            containerStyle={styles.wordContainer}
          />
        ))}
      </MainLayout>
    );
  }
);

export default WordSetsScreen;

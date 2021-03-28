import React, { FC, useCallback } from "react";
import { Button, View } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordSet from "components/WordSet";
import styles from "./WordSetsScreen.styles";

const WordSetsScreen: FC<INavigatorProps<"WordSets">> = observer(
  ({ navigation }) => {
    const {
      createGameStore,
      wordsStore: { groups, toggleCheckedGroup },
    } = useStore("rootStore");

    const gotoGame = useCallback(() => {
      createGameStore();
      navigation.navigate("Overview");
    }, [createGameStore, navigation]);

    const checkedGroups = groups.filter((g) => g.checked);

    return (
      <View style={styles.container}>
        {groups.map((group) => (
          <WordSet
            key={group.id}
            group={group}
            checked={group.checked}
            onToggle={toggleCheckedGroup}
          />
        ))}
        <Button
          title="Start game"
          onPress={gotoGame}
          disabled={checkedGroups.length < 1}
        />
      </View>
    );
  }
);

export default WordSetsScreen;

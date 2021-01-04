import React, { FC, useCallback } from "react";
import { Button, View } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordsGroup from "components/WordsGroup";
import styles from "./GameSettingsScreen.styles";

const GameSettingsScreen: FC<INavigatorProps<"GameSettings">> = observer(
  ({ navigation }) => {
    const {
      wordsStore: { groups, toggleCheckedGroup },
    } = useStore("rootStore");

    const gotoGame = useCallback(() => {
      navigation.navigate("Results");
    }, [navigation]);

    return (
      <View style={styles.container}>
        {groups.map((group) => (
          <WordsGroup
            key={group.id}
            group={group}
            checked={group.checked}
            onToggle={toggleCheckedGroup}
          />
        ))}
        <Button title="Start game" onPress={gotoGame} />
      </View>
    );
  }
);

export default GameSettingsScreen;

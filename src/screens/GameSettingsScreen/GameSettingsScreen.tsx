import React, { FC } from "react";
import { Button, View } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import WordsGroup from "components/WordsGroup";
import styles from "./GameSettingsScreen.styles";

const GameSettingsScreen: FC<INavigatorProps<"GameSettings">> = observer(
  ({ navigation }) => {
    const {
      wordsStore: { groups, toggleCheckedGroupsIds, checkedGroupsIds },
    } = useStore("rootStore");

    return (
      <View style={styles.container}>
        {groups.map((group) => (
          <WordsGroup
            key={group.id}
            group={group}
            checked={checkedGroupsIds.includes(group.id)}
            onToggle={toggleCheckedGroupsIds}
          />
        ))}
        <Button
          title="Start game"
          onPress={() => navigation.navigate("Results")}
        />
      </View>
    );
  }
);

export default GameSettingsScreen;

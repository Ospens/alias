import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import WordsGroup from "components/WordsGroup";
import styles from "./GameSettingsScreen.styles";

const GameSettingsScreen = observer(() => {
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
    </View>
  );
});

export default GameSettingsScreen;

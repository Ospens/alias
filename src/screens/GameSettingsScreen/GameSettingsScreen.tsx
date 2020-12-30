import React from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import styles from "./GameSettingsScreen.styles";

const GameSettingsScreen = observer(() => {
  const {
    wordsStore: { groups },
  } = useStore("rootStore");
  return (
    <View style={styles.container}>
      <Text>Game Settings Screen</Text>
      {groups.map((group) => (
        <Text key={group.id}>{group.name}</Text>
      ))}
    </View>
  );
});

export default GameSettingsScreen;

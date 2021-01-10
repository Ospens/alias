import React, { FC } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { RoundResultsProps } from "./RoundResults.types";
import styles from "./RoundResults.styles";
import WordRow from "./WordRow";

const RoundResults: FC<RoundResultsProps> = observer(() => {
  const { gameStore } = useStore("rootStore");

  if (gameStore === undefined) {
    console.error("gameStore is undefined");
    return null;
  }
  const { wordsFromRound } = gameStore;

  return (
    <View style={styles.container}>
      {wordsFromRound.map((word) => {
        return <WordRow key={word.id} word={word} />;
      })}
    </View>
  );
});

export default RoundResults;

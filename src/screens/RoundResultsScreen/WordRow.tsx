import React, { FC, useCallback } from "react";
import Switch from "components/Switch";
import { observer } from "mobx-react-lite";
import { useGameStore } from "routing/GameRouting.store";
import type { WordRowProps } from "./RoundResultsScreen.types";
import styles from "./RoundResultsScreen.styles";

const WordRow: FC<WordRowProps> = observer(({ word }) => {
  const { toggleWordStatus } = useGameStore();

  const onValueChange = useCallback(
    (checked: boolean) => {
      toggleWordStatus(word, checked);
    },
    [toggleWordStatus, word],
  );

  return (
    <Switch
      style={styles.wordRow}
      title={word.value}
      onValueChange={onValueChange}
      value={word.guessed}
    />
  );
});

WordRow.displayName = "WordRow";

export default WordRow;

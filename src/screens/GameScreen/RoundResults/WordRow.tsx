import React, { FC, useCallback } from "react";
import Switch from "components/Switch";
import { observer } from "mobx-react-lite";
import { useGameStore } from "routing/GameRouting.store";
import type { WordRowProps } from "./RoundResults.types";

const WordRow: FC<WordRowProps> = observer(({ word }) => {
  const { toggleWordStatus } = useGameStore();
  const onValueChange = useCallback(
    (checked: boolean) => {
      if (toggleWordStatus) {
        toggleWordStatus(word, checked);
      }
    },
    [toggleWordStatus, word]
  );

  return (
    <Switch
      title={word.value}
      onValueChange={onValueChange}
      value={word.status === "GUESSED"}
    />
  );
});

export default WordRow;

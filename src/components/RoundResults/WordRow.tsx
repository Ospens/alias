import React, { FC, useCallback } from "react";
import Switch from "components/Switch";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { WordRowProps } from "./RoundResults.types";

const WordRow: FC<WordRowProps> = observer(({ word }) => {
  const { gameStore } = useStore("rootStore");

  if (gameStore === undefined) {
    console.error("gameStore is undefined");
    return null;
  }
  const { toggleWordStatus } = gameStore;
  const onValueChange = useCallback(
    (checked: boolean) => {
      console.log(word, checked);
      toggleWordStatus(word, checked);
    },
    [toggleWordStatus, word]
  );
  return (
    <Switch
      key={word.id}
      title={word.value}
      onValueChange={onValueChange}
      value={word.status === "GUESSED"}
    />
  );
});

export default WordRow;
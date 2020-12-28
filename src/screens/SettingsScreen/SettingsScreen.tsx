import React, { useCallback } from "react";
import { View, Button } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useStore } from "stores";
import Switch from "components/Switch";
import { roundDurationSelectValues } from "stores/SettingsStore";
import SelectPicker from "components/SelectPicker";
import { pointsForWinSelectValues } from "stores/SettingsStore/constants";
import styles from "./SettingsScreen.styles";

const SettingsScreen = observer(
  ({ navigation }: INavigatorProps<"Settings">) => {
    const {
      settingsStore: {
        penaltyForSkip,
        togglePenaltyForSkip,
        toggleRoundDuration,
        togglePointsForWin,
        roundDuration,
        pointsForWin,
      },
    } = useStore("rootStore");

    const toggle = useCallback((val) => togglePenaltyForSkip(val), [
      togglePenaltyForSkip,
    ]);

    return (
      <View style={styles.container}>
        <SelectPicker
          title="Points for win"
          value={pointsForWin}
          items={pointsForWinSelectValues}
          onValueChange={togglePointsForWin}
        />
        <SelectPicker
          title="Round duration"
          value={roundDuration}
          items={roundDurationSelectValues}
          onValueChange={toggleRoundDuration}
        />
        <Switch
          title="Penalty for skip"
          onValueChange={toggle}
          value={penaltyForSkip}
        />
        <Button title="Go to Home" onPress={navigation.goBack} />
      </View>
    );
  }
);

export default SettingsScreen;

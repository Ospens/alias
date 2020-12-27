import React, { useCallback } from "react";
import { View, Button } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useStore } from "stores";
import Switch from "components/Switch";
import { roundDurationSelectValues } from "stores/SettingsStore";
import SelectPicker from "components/SelectPicker";
import styles from "./SettingsScreen.styles";

const SettingsScreen = observer(
  ({ navigation }: INavigatorProps<"Settings">) => {
    const {
      settingsStore: {
        penaltyForSkip,
        togglePenaltyForSkip,
        toggleRoundDuration,
        roundDuration,
      },
    } = useStore("rootStore");

    const toggle = useCallback((val) => togglePenaltyForSkip(val), [
      togglePenaltyForSkip,
    ]);

    return (
      <View style={styles.container}>
        <SelectPicker
          title="Round duration"
          value={roundDuration}
          items={roundDurationSelectValues}
          onValueChange={(value) => toggleRoundDuration(value)}
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

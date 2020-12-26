import React, { useCallback } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import Switch from "components/Switch";
import type { INavigatorProps } from "routing";
import { useStore } from "stores";
import styles from "./SettingsScreen.styles";

const SettingsScreen = observer(
  ({ navigation }: INavigatorProps<"Settings">) => {
    const {
      settingsStore: { penaltyForSkip, togglePenaltyForSkip },
    } = useStore("rootStore");

    const toggle = useCallback((val) => togglePenaltyForSkip(val), [
      togglePenaltyForSkip,
    ]);

    return (
      <View style={styles.container}>
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

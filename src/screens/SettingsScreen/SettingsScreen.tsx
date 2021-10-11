import React, { useCallback, useMemo } from "react";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useLocale, useStore } from "stores";
import Switch from "components/Switch";
import { roundDurationSelectValues } from "stores/SettingsStore";
import SelectPicker from "components/SelectPicker";
import { pointsForWinSelectValues } from "stores/SettingsStore/constants";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import styles from "./SettingsScreen.styles";

const SettingsScreen = observer(({ navigation }: INavigatorProps<"Settings">) => {
  const locale = useLocale();

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

  const handlePenaltyForSkip = useCallback((val) => togglePenaltyForSkip(val), [
    togglePenaltyForSkip,
  ]);

  const bottomPanel = useMemo(() => {
    return (
      <RectangleButton
        title={locale.actions.back}
        onPress={navigation.goBack}
        style={styles.buttonBack}
      />
    );
  }, [locale.actions.back, navigation.goBack]);

  return (
    <MainLayout style={styles.container} bottomPanel={bottomPanel}>
      {/* <Switch */}
      {/*  title="Звук" */}
      {/*  onValueChange={() => {}} */}
      {/*  value={false} */}
      {/*  style={styles.row} */}
      {/* /> */}
      {/* <Switch */}
      {/*  title="Вибрация" */}
      {/*  onValueChange={() => {}} */}
      {/*  value={false} */}
      {/*  style={styles.row} */}
      {/* /> */}
      <Switch
        title={locale.settings.penaltyForSkip}
        onValueChange={handlePenaltyForSkip}
        value={penaltyForSkip}
        style={styles.row}
      />
      <SelectPicker
        title={locale.settings.pointsForWin}
        value={pointsForWin}
        items={pointsForWinSelectValues}
        onValueChange={togglePointsForWin}
        wrapperStyle={styles.row}
      />
      <SelectPicker
        title={locale.settings.roundDuration}
        value={roundDuration}
        items={roundDurationSelectValues}
        onValueChange={toggleRoundDuration}
        wrapperStyle={styles.row}
      />
      {/* <SelectPicker */}
      {/*  title="Язык слов" */}
      {/*  value="Русский" */}
      {/*  items={{ label: "Русский", value: "Русский" }} */}
      {/*  onValueChange={() => {}} */}
      {/* /> */}
    </MainLayout>
  );
});

SettingsScreen.displayName = "SettingsScreen";

export default SettingsScreen;

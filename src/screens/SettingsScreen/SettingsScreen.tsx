import React, { useCallback, useMemo } from "react";
import { Linking, Platform, Text, TouchableOpacity } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useLocale, useStore } from "stores";
import Switch from "components/Switch";
import { roundDurationSelectValues } from "stores/SettingsStore";
import SelectPicker from "components/SelectPicker";
import { languagesValues, pointsForWinSelectValues } from "stores/SettingsStore/constants";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import styles from "./SettingsScreen.styles";

const openPlatformMarket = () => {
  // TODO: add real links
  const marketAppLink = Platform.OS === "ios" ? "" : "market://details?id=myandroidappid";

  Linking.canOpenURL(marketAppLink)
    .then((supported) => {
      if (supported) {
        Linking.openURL(marketAppLink);
      } else {
        const marketWebsite =
          Platform.OS === "ios" ? `` : "https://play.google.com/store?hl=ru&tab=r8";
        Linking.openURL(marketWebsite);
      }
    })
    .catch((err) => console.error(err));
};

const SettingsScreen = observer(({ navigation }: INavigatorProps<"Settings">) => {
  const locale = useLocale();

  const {
    settingsStore: {
      penaltyForSkip,
      togglePenaltyForSkip,
      toggleRoundDuration,
      togglePointsForWin,
      roundDuration,
      languageOfWords,
      languageOfApp,
      pointsForWin,
      toggleLanguageOfWords,
      toggleLanguageOfApp,
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
      <SelectPicker
        title={locale.settings.languageOfWords}
        value={languageOfWords}
        items={languagesValues}
        onValueChange={toggleLanguageOfWords}
        wrapperStyle={styles.row}
        size="l"
      />
      <SelectPicker
        title={locale.settings.languageOfApp}
        value={languageOfApp}
        items={languagesValues}
        onValueChange={toggleLanguageOfApp}
        wrapperStyle={styles.row}
        size="l"
      />

      {/* Need to be at the bottom place always */}
      <TouchableOpacity onPress={openPlatformMarket}>
        <Text style={styles.rateAppText}>{locale.settings.rateApp}</Text>
      </TouchableOpacity>
    </MainLayout>
  );
});

SettingsScreen.displayName = "SettingsScreen";

export default SettingsScreen;

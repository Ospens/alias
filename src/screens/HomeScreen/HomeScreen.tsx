import React, { FC, useCallback, useMemo } from "react";
import { FlatList } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useLocale, useStore } from "stores";
import Team from "components/Team";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import { GearIcon, PlusIcon } from "components/svg";
import { colors } from "themes";
import type { Team as TeamItem } from "stores/TeamsStore";
import styles from "./HomeScreen.styles";

const keyExtractor = (team: TeamItem) => team.uuid;

const HomeScreen: FC<INavigatorProps<"Home">> = observer(({ navigation }) => {
  const locale = useLocale();
  const {
    teamsStore: { teams, createTeam, hasAvailableTeam },
  } = useStore("rootStore");

  const gotoSettings = useCallback(() => {
    navigation.navigate("Settings");
  }, [navigation]);

  const gotoWordsChoice = useCallback(() => {
    navigation.navigate("WordSets");
  }, [navigation]);

  const handleCreateTeam = useCallback(() => {
    createTeam();
  }, [createTeam]);

  const bottomPanel = useMemo(() => {
    return (
      <>
        <RectangleButton onPress={gotoSettings} style={styles.settingButton} isSquare>
          <GearIcon />
        </RectangleButton>
        <RectangleButton
          title={locale.actions.next}
          onPress={gotoWordsChoice}
          style={styles.nextButton}
          disabled={teams.length < 2}
        />
      </>
    );
  }, [gotoSettings, gotoWordsChoice, locale.actions.next, teams.length]);

  return (
    <MainLayout style={styles.container} bottomPanel={bottomPanel}>
      <FlatList
        data={teams}
        keyExtractor={keyExtractor}
        // TODO: when renderItem in useCallback observer changes doesn't work
        renderItem={({ item: team }) => (
          <Team key={team.uuid} team={team} containerStyle={styles.teamContainer} />
        )}
      />
      {hasAvailableTeam && (
        <RectangleButton onPress={handleCreateTeam} style={styles.addTeamButton}>
          <PlusIcon fill={colors.buttons.accept} />
        </RectangleButton>
      )}
    </MainLayout>
  );
});

HomeScreen.displayName = "HomeScreen";

export default HomeScreen;

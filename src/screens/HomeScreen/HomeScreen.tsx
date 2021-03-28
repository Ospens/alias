import React, { FC, useCallback, useMemo } from "react";
import { FlatList } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useStore } from "stores";
import Team from "components/Team";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import { GearIcon, PlusIcon } from "components/svg";
import { colors } from "themes";
import type { Team as TeamItem } from "stores/TeamsStore";
import styles from "./HomeScreen.styles";

const keyExtractor = (team: TeamItem) => team.uuid;

const HomeScreen: FC<INavigatorProps<"Home">> = observer(({ navigation }) => {
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
        <RectangleButton onPress={gotoSettings} style={styles.settingButton}>
          <GearIcon />
        </RectangleButton>
        <RectangleButton
          title="Далее"
          onPress={gotoWordsChoice}
          style={styles.nextButton}
          disabled={teams.length < 2}
        />
      </>
    );
  }, [gotoSettings, gotoWordsChoice, teams.length]);

  return (
    <MainLayout style={styles.container} bottomPanel={bottomPanel}>
      <FlatList
        data={teams}
        keyExtractor={keyExtractor}
        // TODO: when renderItem in useCallback observer changes doesn't work
        renderItem={({ item: team }) => (
          <Team
            key={team.uuid}
            team={team}
            containerStyle={styles.teamContainer}
          />
        )}
      />
      {hasAvailableTeam && (
        <RectangleButton
          onPress={handleCreateTeam}
          style={styles.addTeamButton}
        >
          <PlusIcon fill={colors.buttons.accept} />
        </RectangleButton>
      )}
    </MainLayout>
  );
});

export default HomeScreen;

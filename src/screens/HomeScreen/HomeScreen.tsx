import React, { FC, useCallback } from "react";
import { View, Button, Text } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import { useStore } from "stores";
import Team from "components/Team";
import MainLayout from "components/MainLayout";
import RectangleButton from "components/ReactangleButton";
import { PlusIcon } from "components/svg";
import { colors } from "themes";
import styles from "./HomeScreen.styles";

const HomeScreen: FC<INavigatorProps<"Home">> = observer(({ navigation }) => {
  const {
    teamsStore: { teams, createTeam, hasAvailableTeam },
  } = useStore("rootStore");

  const gotoSettings = useCallback(() => {
    navigation.navigate("Settings");
  }, [navigation]);

  const gotoGameSettings = useCallback(() => {
    navigation.navigate("GameSettings");
  }, [navigation]);

  const handleCreateTeam = useCallback(() => {
    createTeam();
  }, [createTeam]);

  return (
    <MainLayout style={styles.container}>
      <View>
        {teams.map((team) => (
          <Team
            key={team.uuid}
            team={team}
            containerStyle={styles.teamContainer}
          />
        ))}
      </View>
      {hasAvailableTeam && (
        <RectangleButton
          onPress={handleCreateTeam}
          style={styles.addTeamButton}
        >
          <PlusIcon fill={colors.buttons.accept} />
        </RectangleButton>
      )}
      <Button title="Settings" onPress={gotoSettings} />
      <Button
        title="Choose words sets"
        onPress={gotoGameSettings}
        disabled={teams.length < 2}
      />
    </MainLayout>
  );
});

export default HomeScreen;

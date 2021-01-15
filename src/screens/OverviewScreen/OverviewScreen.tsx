import React, { FC, useCallback } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import styles from "./OverviewScreen.styles";

const OverviewScreen: FC<INavigatorProps<"Overview">> = observer(
  ({ navigation }) => {
    const { gameStore } = useStore("rootStore");

    const gotoGame = useCallback(() => {
      if (gameStore) {
        gameStore.startRound();
      }
      navigation.navigate("Game");
    }, [gameStore, navigation]);

    const gotoMenu = useCallback(() => {
      navigation.navigate("Home");
    }, [navigation]);

    if (gameStore === undefined) {
      // eslint-disable-next-line no-console
      console.error("gameStore is undefined");
      return null;
    }
    const { gameTeams, currentTeam, winner } = gameStore;

    return (
      <View style={styles.container}>
        {winner ? (
          <>
            <Text>{`Team "${currentTeam?.name}" won`}</Text>
            <Button title="Go to home" onPress={gotoMenu} />
          </>
        ) : (
          <>
            <Text>{`The next team is "${currentTeam?.name}"`}</Text>
            {gameTeams.map((team) => {
              const isCurrentTeam = team.uuid === currentTeam.uuid;
              return (
                <View key={team.uuid} style={styles.teamWrapper}>
                  <Text style={[isCurrentTeam && styles.activeTeam]}>
                    {team.name}
                  </Text>
                  <Text>{team.points}</Text>
                </View>
              );
            })}
            <Button title="Play" onPress={gotoGame} />
          </>
        )}
      </View>
    );
  }
);

export default OverviewScreen;

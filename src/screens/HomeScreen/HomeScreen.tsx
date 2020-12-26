import React from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import type { INavigatorProps } from "routing";
import styles from "./HomeScreen.styles";

const HomeScreen = observer(({ navigation }: INavigatorProps<"Home">) => {
  return (
    <View style={styles.container}>
      <Text>Teams list</Text>
      <Text>Team 1</Text>
      <Text>Team 2</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
});

export default HomeScreen;

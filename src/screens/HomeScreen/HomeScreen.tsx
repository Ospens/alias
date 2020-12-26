import React from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import type { INavigatorProps } from "routing";
import styles from "./HomeScreen.styles";

const HomeScreen = observer(({ navigation }: INavigatorProps<"Home">) => {
  const rootStore = useStore("rootStore");

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Another"
        onPress={() =>
          navigation.navigate("Another", {
            someParam: "latest",
          })
        }
      />
      <Button title="double" onPress={() => rootStore.increment()} />
      <Button title="reassign" onPress={() => rootStore.reassign()} />
    </View>
  );
});

export default HomeScreen;

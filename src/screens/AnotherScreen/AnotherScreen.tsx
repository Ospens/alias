import React, { memo } from "react";
import { View, Text, Button } from "react-native";
import type { INavigatorProps } from "routing";
import styles from "./AnotherScreen.styles";

const AnotherScreen = memo(({ navigation }: INavigatorProps<"Another">) => (
  <View style={styles.container}>
    <Text>Details Screen</Text>
    <Button title="Go to Home" onPress={navigation.goBack} />
  </View>
));

export default AnotherScreen;

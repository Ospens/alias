import React, { memo } from "react";
import { View, Text, Button } from "react-native";
import type { INavigatorProps } from "routing";
import styles from "./SettingsScreen.styles";

const SettingsScreen = memo(({ navigation }: INavigatorProps<"Settings">) => (
  <View style={styles.container}>
    <Text>Settings</Text>
    <Button title="Go to Home" onPress={navigation.goBack} />
  </View>
));

export default SettingsScreen;

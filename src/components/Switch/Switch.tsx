import React, { FC, memo } from "react";
import { View, Switch as RNSwitch, Text } from "react-native";
import { ISwitch } from "./Switch.types";
import styles from "./Switch.styles";

const Switch: FC<ISwitch> = memo(({ title, onValueChange, value = false }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.switchWrapper}>
        <RNSwitch
          ios_backgroundColor="#3e3e3e"
          onValueChange={onValueChange}
          value={value}
        />
      </View>
    </View>
  );
});

export default Switch;

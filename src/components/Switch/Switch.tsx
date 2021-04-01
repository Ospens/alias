import React, { memo, useMemo } from "react";
import { View, Switch as RNSwitch, Text, StyleSheet } from "react-native";
import { ISwitch } from "./Switch.types";
import styles from "./Switch.styles";

const Switch = memo(
  ({ title, onValueChange, style, value = false }: ISwitch) => {
    const containerStyles = useMemo(
      () => StyleSheet.flatten([styles.container, style]),
      [style]
    );
    return (
      <View style={containerStyles}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.switchWrapper}>
          <RNSwitch
            ios_backgroundColor="#3e3e3e"
            onValueChange={onValueChange}
            value={value}
          />
        </View>
      </View>
    );
  }
);

export default Switch;

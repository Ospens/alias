import React, { memo, PropsWithChildren, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ISelectPicker } from "./SelectPicker.types";
import styles, { pickerSelectStyles } from "./SelectPicker.styles";

const typedMemo: <T>(props: T) => T = memo;

const blankIcon = () => null;

const SelectPicker = typedMemo(
  <T,>({
    title,
    items,
    value,
    wrapperStyle,
    onValueChange,
  }: PropsWithChildren<ISelectPicker<T>>) => {
    const containerStyles = useMemo(() => StyleSheet.flatten([styles.container, wrapperStyle]), [
      wrapperStyle,
    ]);

    return (
      <View style={containerStyles}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.pickerWrapper}>
          <RNPickerSelect
            onValueChange={onValueChange}
            items={items}
            useNativeAndroidPickerStyle={false}
            value={value}
            Icon={blankIcon}
            style={pickerSelectStyles}
          />
        </View>
      </View>
    );
  },
);

export default SelectPicker;

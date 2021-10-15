import React, { memo, PropsWithChildren, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ISelectPicker } from "./SelectPicker.types";
import styles, { pickerSelectStyles } from "./SelectPicker.styles";

const typedMemo: <T>(props: T) => T = memo;

const blankIcon = () => null;

const placeholder = {};

const SelectPicker = typedMemo(
  <T,>({
    title,
    items,
    value,
    wrapperStyle,
    onValueChange,
    size = "m",
  }: PropsWithChildren<ISelectPicker<T>>) => {
    const containerStyles = useMemo(() => StyleSheet.flatten([styles.container, wrapperStyle]), [
      wrapperStyle,
    ]);

    const pickerSelectStylesWithSize = useMemo(() => {
      if (size === "l") {
        return {
          ...pickerSelectStyles,
          inputAndroid: {
            ...pickerSelectStyles.inputAndroid,
            width: 200,
          },
          inputIOS: {
            ...pickerSelectStyles.inputIOS,
            width: 200,
          },
        };
      }

      return pickerSelectStyles;
    }, [size]);

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
            style={pickerSelectStylesWithSize}
            placeholder={placeholder}
          />
        </View>
      </View>
    );
  },
);

export default SelectPicker;

import React, { memo, PropsWithChildren } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ISelectPicker } from "./SelectPicker.types";
import styles, { pickerSelectStyles } from "./SelectPicker.styles";

const typedMemo: <T>(props: T) => T = memo;

const SelectPicker = typedMemo(
  <T,>({
    title,
    items,
    value,
    onValueChange,
  }: PropsWithChildren<ISelectPicker<T>>) => {
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <View style={styles.pickerWrapper}>
          <RNPickerSelect
            onValueChange={onValueChange}
            items={items}
            value={value}
            style={pickerSelectStyles}
          />
        </View>
      </View>
    );
  }
);

export default SelectPicker;

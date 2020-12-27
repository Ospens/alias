import React, { FC, memo } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ISelectInput } from "./SelectPicker.types";
import styles, { pickerSelectStyles } from "./SelectPicker.styles";

const SelectPicker: FC<ISelectInput> = memo(
  ({ title, items, value, onValueChange }) => {
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

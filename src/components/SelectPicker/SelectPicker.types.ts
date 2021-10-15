import { PickerSelectProps, Item } from "react-native-picker-select";
import { StyleProp, ViewStyle } from "react-native";

export interface SelectItem<ValueType> extends Item {
  value: ValueType;
}

export interface ISelectPicker<ValueType = any> extends PickerSelectProps {
  title: string;
  value?: ValueType;
  items: SelectItem<ValueType>[];
  wrapperStyle?: StyleProp<ViewStyle>;
  onValueChange: (value: ValueType, index: number) => void;
  size?: "s" | "m" | "l";
}

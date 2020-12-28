import { PickerSelectProps, Item } from "react-native-picker-select";

export interface SelectItem<ValueType> extends Item {
  value: ValueType;
}

export interface ISelectPicker<ValueType = any> extends PickerSelectProps {
  title: string;
  value?: ValueType;
  items: SelectItem<ValueType>[];
  onValueChange: (value: ValueType, index: number) => void;
}

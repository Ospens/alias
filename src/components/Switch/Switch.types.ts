import { StyleProp, ViewStyle } from "react-native";

export interface ISwitch {
  title: string;
  value: boolean;
  style?: StyleProp<ViewStyle>;
  onValueChange: (isEnabled: boolean) => void;
}

import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";

export interface RectangleButtonProps extends TouchableOpacityProps {
  title?: string;
  textStyle?: StyleProp<TextStyle>;
}

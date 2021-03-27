import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface MainLayoutProps {
  style?: StyleProp<ViewStyle>;
  bottomPanel?: ReactElement;
}

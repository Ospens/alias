import type { WordSet } from "stores/WordsStore";
import { StyleProp, ViewStyle } from "react-native";

export interface WordSetProps {
  set: WordSet;
  containerStyle?: StyleProp<ViewStyle>;
}

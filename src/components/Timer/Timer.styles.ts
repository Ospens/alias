import { StyleSheet } from "react-native";
import { fonts } from "themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  seconds: {
    ...fonts.types.bold,
    lineHeight: 64,
    fontSize: 64,
  },
});

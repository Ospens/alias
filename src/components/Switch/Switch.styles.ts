import { StyleSheet } from "react-native";
import { typography } from "themes";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: typography.horizontalMargin,
    paddingVertical: 5,
  },
  switchWrapper: {
    marginLeft: "auto",
  },
});

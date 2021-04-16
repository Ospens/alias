import { StyleSheet } from "react-native";
import { fonts } from "themes";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    ...fonts.types.regular,
    paddingRight: 30,
    maxWidth: "80%",
  },
  switchWrapper: {
    marginLeft: "auto",
  },
});

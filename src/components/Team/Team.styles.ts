import { StyleSheet } from "react-native";
import { colors, fonts } from "themes";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 54,
    borderColor: colors.borders.grey,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  title: {
    ...fonts.types.medium,
    display: "flex",
    color: colors.text.black,
    fontSize: 18,
  },
  score: {
    display: "flex",
    color: colors.text.black,
    fontWeight: "600",
    fontSize: 18,
  },
});

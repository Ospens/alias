import { StyleSheet } from "react-native";
import { colors, fonts } from "themes";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    borderColor: colors.borders.black,
    borderWidth: 2,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  title: {
    ...fonts.types.medium,
    fontSize: 18,
  },
});

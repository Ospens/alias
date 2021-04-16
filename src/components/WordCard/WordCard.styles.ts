import { StyleSheet } from "react-native";
import { colors, fonts } from "themes";

export default StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  card: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 220,
    justifyContent: "center",
    borderRadius: 15,
    borderColor: colors.borders.black,
    borderWidth: 1,
    backgroundColor: colors.white,
    zIndex: 2,
  },
  word: {
    ...fonts.types.bold,
    fontSize: 30,
    textAlign: "center",
  },
  nextCard: {
    position: "absolute",
    top: 30,
    left: 15,
    right: 15,
    height: 200,
    borderRadius: 15,
    borderColor: colors.borders.black,
    borderWidth: 1,
    backgroundColor: colors.grey,
    zIndex: 1,
  },
});

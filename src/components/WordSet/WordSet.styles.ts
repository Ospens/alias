import { StyleSheet } from "react-native";
import { colors } from "themes";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.borders.grey,
    borderRadius: 15,
    height: 70,
    paddingHorizontal: 20,
  },
  infoWrapper: {
    width: "80%",
    justifyContent: "center",
  },
  subInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: colors.text.black,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  wordsCount: {
    color: colors.text.black,
    fontSize: 12,
    fontWeight: "400",
  },
  exampleWords: {
    color: colors.text.black,
    fontSize: 12,
    fontWeight: "400",
  },
  checkWrapper: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "20%",
  },
});

// with 75%

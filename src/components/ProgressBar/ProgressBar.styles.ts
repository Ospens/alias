import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyLine: {
    height: 3,
    backgroundColor: "gray",
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
  doneLine: {
    height: 7,
    backgroundColor: "red",
    borderRadius: 5,
  },
});

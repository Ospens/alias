import { StyleSheet } from "react-native";
import { colors } from "themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  childrenWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 25,
  },
  bottomPanelWrapper: {
    display: "flex",
    flexDirection: "row",
    height: 54,
    marginHorizontal: 20,
  },
});

import { StyleSheet } from "react-native";
import { colors } from "themes";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.overlay.background,
    zIndex: 999,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
  resumeButton: {
    height: 54,
    borderColor: colors.buttons.accept,
    backgroundColor: colors.buttons.accept,
    marginBottom: 30,
  },
  resumeButtonTitle: {
    fontWeight: "bold",
    color: colors.text.white,
  },
  menuButton: {
    height: 54,
    borderColor: colors.buttons.decline,
    backgroundColor: colors.buttons.decline,
  },
  menuButtonTitle: {
    fontWeight: "bold",
    color: colors.text.white,
  },
});

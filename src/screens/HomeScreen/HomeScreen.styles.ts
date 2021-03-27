import { StyleSheet } from "react-native";
import { colors } from "themes";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  teamContainer: {
    marginBottom: 15,
  },
  addTeamButton: {
    marginBottom: 15,
    borderColor: colors.buttons.accept,
    borderWidth: 1,
  },
  settingButton: {
    width: 54,
    height: 54,
    marginRight: 20,
  },
  nextButton: {
    height: 54,
    flex: 1,
  },
});

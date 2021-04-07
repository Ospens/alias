import { StyleSheet } from "react-native";
import { colors } from "themes";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  wordCardWrapper: {
    flex: 3,
  },
  timerWrapper: {
    flex: 2,
  },
  statsWrapper: {
    flex: 2,
  },
  declineButton: {
    flex: 1,
    height: 54,
    borderColor: colors.buttons.decline,
    marginRight: 10,
  },
  declineButtonTitle: {
    color: colors.buttons.decline,
  },
  guessButton: {
    flex: 1,
    height: 54,
    borderColor: colors.buttons.accept,
    backgroundColor: colors.buttons.accept,
    marginLeft: 10,
  },
  guessButtonTitle: {
    color: colors.text.white,
  },
});

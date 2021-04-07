import { StyleSheet } from "react-native";
import { colors } from "themes";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  wordCardWrapper: {
    flex: 3,
  },
  topWrapper: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pauseButton: {
    flex: 1,
  },
  score: {
    flex: 1,
    textAlign: "right",
    color: colors.yellow,
    fontWeight: "800",
    fontSize: 28,
    lineHeight: 28,
  },
  currentScore: {
    color: colors.yellow,
    fontSize: 18,
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

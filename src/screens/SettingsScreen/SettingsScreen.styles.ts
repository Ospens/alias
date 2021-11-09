import { StyleSheet } from "react-native";
import { fonts } from "themes";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonBack: {
    flex: 1,
  },
  row: {
    marginBottom: 15,
    minHeight: 32,
  },
  rateAppText: {
    ...fonts.types.bold,
    fontSize: 18,
    marginTop: 15,
  },
});

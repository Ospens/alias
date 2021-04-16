import { StyleSheet } from "react-native";
import { colors, fonts } from "themes";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pickerWrapper: {
    marginLeft: "auto",
  },
  title: {
    ...fonts.types.regular,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    width: 50,
    paddingVertical: 5,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color: colors.black,
  },
  inputAndroid: {
    fontSize: 16,
    width: 50,
    paddingVertical: 5,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color: colors.black,
  },
});

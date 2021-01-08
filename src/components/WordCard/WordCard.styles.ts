import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 200,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
  },
  word: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsWrapper: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  decline: {
    backgroundColor: "red",
  },
  guess: {
    backgroundColor: "green",
  },
});

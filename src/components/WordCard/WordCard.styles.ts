import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: "90%",
    backgroundColor: "white",
  },
  word: {
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonsWrapper: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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

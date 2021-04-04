import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  teamWrapper: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
  },
  queueText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 30,
    textAlign: "center",
  },
  roundNumber: {
    fontSize: 14,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: 15,
  },
});

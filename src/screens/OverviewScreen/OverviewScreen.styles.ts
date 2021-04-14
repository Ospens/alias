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
  winnerWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  winnerTeam: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  tadaSmile: { fontSize: 70 },
});

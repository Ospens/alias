import { StyleSheet } from "react-native";
import { fonts } from "themes";

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
    ...fonts.types.bold,
    fontSize: 18,
    marginVertical: 30,
    textAlign: "center",
  },
  winnerWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  winnerTeam: {
    ...fonts.types.bold,
    fontSize: 32,
    textAlign: "center",
  },
  tadaSmile: { fontSize: 70 },
});

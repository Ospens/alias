import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  teamWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 5,
    color: "gray",
  },
  activeTeam: {
    color: "red",
  },
});

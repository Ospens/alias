import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  wordContainer: {
    marginBottom: 15,
  },
  bottomButton: {
    height: 54,
    flex: 1,
  },
});

export const backButtonStyle = StyleSheet.flatten([
  styles.bottomButton,
  { marginRight: 10 },
]);

export const nextButtonStyle = StyleSheet.flatten([
  styles.bottomButton,
  { marginLeft: 10 },
]);

export default styles;

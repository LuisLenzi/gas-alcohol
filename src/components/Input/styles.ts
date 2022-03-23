import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    width: "100%",
    maxWidth: "80%",
    textAlign: "left",
    justifyContent: "flex-start",
    fontFamily: theme.fonts.regular,
    marginBottom: -5,
  },
  inputBox: {
    width: "100%",
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
  },
  unity: {
    position: "absolute",
    right: 0,
    fontSize: 12,
    fontFamily: theme.fonts.light,
  },
});

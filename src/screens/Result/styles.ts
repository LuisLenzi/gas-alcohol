import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.blue,
  },
  top: {
    paddingLeft: 70,
    paddingRight: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderBottomEndRadius: 90,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  line01: {
    color: theme.colors.black,
    fontSize: 16,
    textAlign: "center",
    fontFamily: theme.fonts.light,
  },
  line02: {
    color: theme.colors.blue,
    fontSize: 24,
    fontFamily: theme.fonts.bold,
  },
  image: {
    marginTop: 50,
    marginBottom: 50,
  },
  bottom: {
    flex: 0.175,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.blue,
  },
  top: {
    paddingLeft: 60,
    paddingRight: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderBottomEndRadius: 90,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  line01: {
    color: theme.colors.black,
    fontSize: 18,
    fontFamily: theme.fonts.light,
  },
  line02: {
    marginTop: -7.5,
    color: theme.colors.black,
    fontSize: 26,
    fontFamily: theme.fonts.bold,
  },
  image: {
    marginTop: 50,
    marginBottom: 50,
  },
  content: {
    color: theme.colors.black,
    fontSize: 12,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.fonts.light,
  },
  bottom: {
    flex: 0.175,
    justifyContent: "center",
    alignItems: "center",
  },
});

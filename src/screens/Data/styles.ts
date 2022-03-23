import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: theme.colors.blue,
    fontSize: 18,
    fontFamily: theme.fonts.light,
  },
  content: {
    color: theme.colors.black,
    fontSize: 12,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.fonts.light,
  },
  line02: {
    marginTop: 20,
    color: theme.colors.black,
    fontSize: 12,
    fontFamily: theme.fonts.light,
  },
  error: {
    bottom: 0,
    left: 0,
    marginBottom: -22,
    position: "absolute",
    color: theme.colors.red,
    fontSize: 12,
    fontFamily: theme.fonts.light,
  },
  gender: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  separator: {
    width: 1,
    borderRadius: 10,
    height: "100%",
    backgroundColor: theme.colors.black,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    fontSize: 14,
    padding: 5,
    paddingEnd: 30,
    borderBottomColor: theme.colors.black,
  },
  bottom: {
    flex: 0.175,
    justifyContent: "center",
    alignItems: "center",
  },
});

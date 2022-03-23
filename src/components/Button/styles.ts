import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  primary: {
    width: 200,
    backgroundColor: theme.colors.blue,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  secondary: {
    width: 225,
    backgroundColor: theme.colors.white,
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tertiary: {
    width: 225,
    backgroundColor: "transparent",
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  primaryText: {
    fontFamily: theme.fonts.semibold,
    color: theme.colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
  secondaryText: {
    fontFamily: theme.fonts.semibold,
    color: theme.colors.blue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
  tertiaryText: {
    fontFamily: theme.fonts.semibold,
    color: theme.colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
  nextIcon: {
    marginLeft: 50,
  },
  backIcon: {
    marginLeft: -200,
    marginRight: 10,
  },
});

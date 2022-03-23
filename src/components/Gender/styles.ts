import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.black,
  },
  titleSelected: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    color: theme.colors.blue,
  },
  icon: {},
});

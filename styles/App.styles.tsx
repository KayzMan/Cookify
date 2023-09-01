import { StyleSheet, StatusBar, Platform } from "react-native";

// 👇 theme
import { theme } from "../theme/theme";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
});

import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme/theme";

export const bottomTabsStyles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    alignSelf: "center",
  },
  tabItem: {
    paddingVertical: theme.sizes.appPadding * 1.2,
    paddingLeft: theme.sizes.appPadding * 2,
    flexDirection: "row",
    alignItems: "center",
  },
  tabItemText: {
    textTransform: "capitalize",
    marginLeft: theme.sizes.appPadding * 0.5,
    color: theme.colors.primary,
    width: "100%",
  },
});

import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../theme/theme";

export const onBoardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  imageContainer: {
    flex: 1,
  },
  title: {
    fontSize: theme.sizes.title_fontSize * 1.8,
    color: theme.colors.primary,
    paddingTop: theme.sizes.appPadding * 3,
    paddingHorizontal: theme.sizes.appPadding * 3,
  },
  avatar: {
    objectFit: "contain",
    resizeMode: "contain",
    alignSelf: "center",
  },
  avatarContainer: {
    flex: 1,
    width: "100%",
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: theme.sizes.appPadding * 2,
    paddingHorizontal: theme.sizes.appPadding * 3,
    alignSelf: "center",
  },
  actionButtonTransparent: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.sizes.radius,
    flex: 1,
    padding: theme.sizes.appPadding * 0.7,
    paddingHorizontal: theme.sizes.appPadding * 1.5,
    marginRight: theme.sizes.appPadding * 0.5,
  },
  actionButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.radius,
    flex: 1,
    padding: theme.sizes.appPadding * 0.7,
    paddingHorizontal: theme.sizes.appPadding * 1.5,
    marginLeft: theme.sizes.appPadding * 0.5,
  },

  actionButtonText: {
    color: theme.colors.white,
    fontSize: theme.sizes.title_fontSize * 0.9,
    textAlign: "center",
  },
});

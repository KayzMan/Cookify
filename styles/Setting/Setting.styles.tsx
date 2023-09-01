import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme/theme";

export const settingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.sizes.appPadding,
    paddingVertical: theme.sizes.appPadding * 2,
    paddingBottom: 0,
  },
  topContainer: {
    backgroundColor: theme.colors.gray_variableFade(0.1),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.appPadding,
    paddingVertical: theme.sizes.appPadding * 1.5,
    marginBottom: theme.sizes.appPadding * 1.5,
  },
  top_avatar: {
    borderRadius: theme.sizes.radius * 1000,
  },
  top_avatarContainer: {
    width: 100,
    height: 100,
  },
  top_rightDetails: {
    marginLeft: theme.sizes.appPadding,
  },
  top_rightDetails_name: {
    fontSize: theme.sizes.title_fontSize * 1.2,
    letterSpacing: 1.2,
  },
  top_rightDetails_email: {
    fontSize: theme.sizes.title_fontSize * 0.9,
  },
  top_rightDetails_button: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: theme.sizes.appPadding * 0.4,
    paddingHorizontal: theme.sizes.appPadding * 1.5,
    borderRadius: theme.sizes.radius * 5,
    marginVertical: theme.sizes.appPadding,
    alignSelf: "flex-start",
  },
  top_rightDetails_buttonText: {
    color: theme.colors.primary,
    textAlign: "center",
    width: "100%",
    fontSize: theme.sizes.title_fontSize * 0.8,
  },
  bottomContainer: {
    backgroundColor: theme.colors.gray_variableFade(0.1),
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.appPadding,
    marginBottom: theme.sizes.appPadding * 0.8,
  },
  bottomItems: {
    marginBottom: theme.sizes.appPadding,
  },
  bottomItem: {
    marginVertical: theme.sizes.appPadding * 0.5,
  },
  bottomItemTitle: {
    fontSize: theme.sizes.title_fontSize * 1.1,
  },
  bottomItem_item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: theme.sizes.appPadding * 0.5,
  },
  bottomItem_itemText: {
    fontSize: theme.sizes.title_fontSize * 0.9,
  },
  bottom_button: {
    alignSelf: "center",
    marginVertical: theme.sizes.appPadding,
    backgroundColor: theme.colors.primary,
    padding: theme.sizes.appPadding * 0.6,
    paddingHorizontal: theme.sizes.appPadding * 2.2,
    borderRadius: theme.sizes.radius,
  },
  bottom_buttonText: {
    color: theme.colors.white,
    fontSize: theme.sizes.title_fontSize * 0.8,
    width: "100%",
    textAlign: "center",
  },
  bottom_helpContainer: {
    marginTop: theme.sizes.appPadding,
    backgroundColor: theme.colors.primary_faded,
    padding: theme.sizes.appPadding,
    marginBottom: theme.sizes.appPadding * 5,
    borderRadius: theme.sizes.radius,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.sizes.appPadding * 2,
    justifyContent: "center",
  },
  bottom_helpText: {
    // marginLeft: theme.sizes.appPadding,
    fontSize: theme.sizes.title_fontSize * 0.9,
    marginRight: theme.sizes.appPadding,
    textAlign: "center",
    width: "70%",
    color: theme.colors.primary,
  },
});

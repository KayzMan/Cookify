import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme/theme";

export const showcaseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.sizes.appPadding,
    paddingVertical: theme.sizes.appPadding * 2,
    paddingBottom: 0,
  },
  topContainer: {
    marginBottom: theme.sizes.appPadding * 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  top_textFieldWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.gray_variableFade(0.1),
    flex: 1,
    marginRight: theme.sizes.appPadding * 1.5,
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.appPadding,
  },
  top_textFieldBox: {},
  top_textField: {
    fontSize: theme.sizes.title_fontSize,
    color: theme.colors.primary,
  },
  iconContainer: {
    backgroundColor: theme.colors.primary_faded,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "row",
    paddingHorizontal: theme.sizes.appPadding * 1.8,
    borderRadius: theme.sizes.radius,
  },
  categoriesContainer: {
    marginBottom: theme.sizes.appPadding,
  },
  categoryItem: {
    backgroundColor: theme.colors.primary_faded,
    marginHorizontal: theme.sizes.appPadding * 0.5,
    padding: theme.sizes.appPadding,
    paddingHorizontal: theme.sizes.appPadding * 1,
    height: 80,
    borderRadius: theme.sizes.radius,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryItem_title: {
    textAlign: "center",
    width: "100%",
    marginHorizontal: theme.sizes.appPadding,
    marginTop: theme.sizes.appPadding,
    color: theme.colors.primary,
    fontSize: theme.sizes.title_fontSize * 0.9,
  },
  bottomContainer: {
    flex: 1,
    marginBottom: theme.sizes.appPadding * 2,
  },
  bottomItem: {
    flex: 1,
    marginVertical: theme.sizes.appPadding,
    height: 300,
    marginBottom: theme.sizes.appPadding * 2,
  },
  bottomItemAvatar: {
    borderRadius: theme.sizes.radius * 1.5,
  },
  bottomItemAvatarContainer: {
    height: 230,
    width: "100%",
  },
  bottomItemDetails: {
    marginTop: theme.sizes.appPadding,
    flex: 1,
  },
  bottomItemDetails_top: {},
  bottomItemDetails_topTitle: {
    fontSize: theme.sizes.title_fontSize,
    color: theme.colors.black,
  },
  bottomItemDetails_topDescription: {
    fontSize: theme.sizes.title_fontSize * 0.8,
  },
  bottomItemDetail_bottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.sizes.appPadding,
  },
  bottomItemDetail_bottomItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: theme.sizes.appPadding * 2,
  },
  bottomItemDetail_bottomItemText: {
    color: theme.colors.black,
  },
});

import { Dimensions, StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme/theme";

const { height, width } = Dimensions.get("screen");

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.sizes.appPadding,
  },
  topContainer: {},
  top_top: {
    marginBottom: theme.sizes.appPadding * 1.5,
  },
  top_topTitle: {
    color: theme.colors.primary,
    fontSize: theme.sizes.title_fontSize * 1.6,
    fontWeight: theme.sizes.fontWeight_medium,
  },
  top_topSubTitle: {
    color: theme.colors.gray,
    fontSize: theme.sizes.title_fontSize * 0.9,
  },
  top_notification: {
    backgroundColor: theme.colors.primary_faded,
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.appPadding,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.sizes.appPadding * 1.5,
  },
  top_notificationRight: {
    marginLeft: theme.sizes.appPadding,
  },
  top_notificationText: {
    fontSize: theme.sizes.title_fontSize * 0.8,
    color: theme.colors.black,
  },
  top_notificationLink: {
    color: theme.colors.primary,
    textDecorationLine: "underline",
    fontSize: theme.sizes.title_fontSize * 0.8,
  },
  top_homeImage: {
    marginBottom: theme.sizes.appPadding * 1.5,
  },
  top_homeImageTop: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
  },
  top_homeImageTopText: {
    backgroundColor: theme.colors.primary_variableFade(0.8),
    color: theme.colors.white,
    fontSize: theme.sizes.title_fontSize * 0.9,
    paddingVertical: theme.sizes.appPadding * 0.2,
    paddingHorizontal: theme.sizes.appPadding * 0.8,
    borderRadius: theme.sizes.radius,
  },
  top_homeImageAvatar: {
    borderRadius: theme.sizes.radius,
  },
  top_homeImageAvatarContainer: {
    width: "100%",
    height: 350,
    borderRadius: theme.sizes.radius * 2,
  },
  top_homeImageBottomLinearGrad: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    borderBottomLeftRadius: theme.sizes.radius,
    borderBottomRightRadius: theme.sizes.radius,
  },
  top_homeImageBottom: {
    position: "absolute",
    bottom: 25,
    left: 10,
    right: 10,
  },
  top_homeImageBottomTitle: {
    color: theme.colors.white,
    fontSize: theme.sizes.title_fontSize * 2,
  },
  top_homeImageBottomSubTitle: {
    marginTop: theme.sizes.appPadding,
    color: theme.colors.white,
    fontSize: theme.sizes.title_fontSize,
  },
  bottomContainer: {
    flex: 1,
    marginBottom: theme.sizes.appPadding * 2,
    marginTop: theme.sizes.appPadding,
  },
  bottom_title: {
    color: theme.colors.black,
    fontSize: theme.sizes.title_fontSize * 1.2,
    marginBottom: theme.sizes.appPadding * 1.5,
  },
  bottomItem: {
    margin: theme.sizes.appPadding,
    height: 350,
    width: width / 1.4,
  },
  bottomItem_avatar: {
    borderRadius: theme.sizes.radius,
    height: 350,
  },
  bottomItem_avatarContainer: {
    width: width / 1.4,
    height: 400,
  },
  bottomItem_badge: {
    position: "absolute",
    top: 20,
    left: 20,
    color: theme.colors.white,
    backgroundColor: theme.colors.black_variableFade(0.7),
    paddingVertical: theme.sizes.appPadding * 0.4,
    paddingHorizontal: theme.sizes.appPadding * 1.5,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.title_fontSize,
  },
  bottomItem_bottom: {
    backgroundColor: theme.colors.black_variableFade(0.5),
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: theme.sizes.appPadding,
    borderRadius: theme.sizes.radius,
  },
  bottomItem_bottomTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomItem_title: {
    color: theme.colors.white,
    fontSize: theme.sizes.title_fontSize * 1.2,
  },
  bottomItem_subTitle: {
    color: theme.colors.white,
    fontSize: theme.sizes.title_fontSize * 0.8,
    marginTop: theme.sizes.appPadding,
  },
});

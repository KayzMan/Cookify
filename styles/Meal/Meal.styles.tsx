import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme/theme";

export const mealStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.sizes.appPadding,
    paddingTop: theme.sizes.appPadding * 2,
    paddingBottom: 0,
  },
  topContainer: {
    marginBottom: theme.sizes.appPadding * 1.5,
  },
  topContainer_title: {
    color: theme.colors.black,
    fontSize: theme.sizes.title_fontSize * 1.6,
    letterSpacing: 1.5,
  },
  top_calendarView: {
    marginVertical: theme.sizes.appPadding * 1.5,
  },
  top_calendarItem: {
    marginRight: theme.sizes.appPadding,
    padding: theme.sizes.appPadding * 0.5,
    paddingHorizontal: theme.sizes.appPadding,
    borderRadius: theme.sizes.radius,
    alignItems: "center",
    justifyContent: "center",
  },
  top_calendarItemDate: {
    width: "100%",
  },
  top_calendarItemDay: {
    width: "100%",
  },
  top_notification: {
    backgroundColor: theme.colors.primary_faded,
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.appPadding,
    width: "100%",
  },
  top_notificationTitle: {
    fontSize: theme.sizes.title_fontSize * 1.4,
    width: "100%",
    textAlign: "center",
    flex: 1,
    letterSpacing: 1.5,
  },
  top_notificationSubTitle: {
    fontSize: theme.sizes.title_fontSize * 0.8,
    width: "100%",
    textAlign: "center",
    flex: 1,
    color: theme.colors.gray,
  },
  top_notification_stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: theme.sizes.appPadding * 2,
  },
  top_notification_statItem: {
    alignItems: "center",
  },
  top_notification_statItem_value: {
    color: theme.colors.primary,
    fontSize: theme.sizes.title_fontSize * 2.2,
    width: "100%",
    marginHorizontal: theme.sizes.appPadding * 0.5,
  },
  top_notification_statItem_text: {
    fontSize: theme.sizes.title_fontSize * 0.9,
  },
  top_notification_lineSpacer: {
    height: "100%",
    width: 1.5,
    backgroundColor: theme.colors.primary,
    textAlign: "center",
  },
  bottomContainer: {
    flex: 1,
    marginBottom: theme.sizes.appPadding * 2,
  },
  bottomItem: {
    marginBottom: theme.sizes.appPadding,
    height: 115,
  },
  bottomItem_topTitle: {
    marginBottom: theme.sizes.appPadding * 0.5,
    fontSize: theme.sizes.title_fontSize,
  },
  bottomItem_bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomItem_left: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomItem_avatar: {
    borderRadius: theme.sizes.radius,
    objectFit: "cover",
    resizeMode: "cover",
  },
  bottomItem_avatarContainer: {},
  bottomItem_leftDetails: {
    marginLeft: theme.sizes.appPadding,
    width: "65%",
  },
  bottomItem_leftTitle: {
    marginBottom: theme.sizes.appPadding * 0.5,
    fontSize: theme.sizes.title_fontSize * 0.9,
  },
  bottomItem_leftSubTitle: {},
  bottomItem_right: {},
});

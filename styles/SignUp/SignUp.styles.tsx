import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme/theme";

export const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.sizes.appPadding,
    paddingVertical: theme.sizes.appPadding * 5,
  },
  top: {
    alignSelf: "center",
    width: "100%",
    marginBottom: theme.sizes.appPadding * 3,
  },
  topIcon: {
    alignSelf: "center",
    marginBottom: theme.sizes.appPadding * 3,
  },
  title: {
    color: theme.colors.primary,
    fontSize: theme.sizes.title_fontSize * 2,
    textAlign: "center",
  },
  inputFieldsContainer: {
    marginBottom: theme.sizes.appPadding,
  },
  inputFieldWrapper: {
    backgroundColor: theme.colors.primary_faded,
    borderRadius: theme.sizes.radius,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.sizes.appPadding,
    marginBottom: theme.sizes.appPadding * 2,
  },
  inputField_box: {},
  inputField: {
    color: theme.colors.primary,
    fontSize: theme.sizes.title_fontSize * 1,
  },
  linkButton: {
    right: "-67%",
  },
  linkButtonText: {
    color: theme.colors.primary,
    fontSize: theme.sizes.title_fontSize,
  },
  actionButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.radius,
    elevation: 5,
    paddingVertical: theme.sizes.appPadding * 0.8,
    marginVertical: theme.sizes.appPadding * 2,
  },
  actionButtonText: {
    color: theme.colors.white,
    textAlign: "center",
    fontSize: theme.sizes.title_fontSize,
  },
  linkButtonUnderlined: {
    textDecorationLine: "underline",
    textAlign: "center",
    color: theme.colors.primary,
    fontSize: theme.sizes.title_fontSize,
  },
});

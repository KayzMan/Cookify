import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../theme/theme";

export const recipeDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.sizes.appPadding,
    paddingVertical: theme.sizes.appPadding,
    paddingBottom: 0,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.sizes.appPadding * 2,
  },
  topTitleContainer: {},
  topTitle: {
    fontSize: theme.sizes.title_fontSize * 2,
    letterSpacing: 1.1,
  },
  topSubTitle: {
    fontSize: theme.sizes.title_fontSize * 0.8,
    color: theme.colors.gray,
  },
  nutritionContainer: {
    marginTop: theme.sizes.appPadding * 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nutritionLeft: {},
  nutritionTitle: {
    fontSize: theme.sizes.title_fontSize * 1.5,
  },
  nutritionItems: {
    marginTop: theme.sizes.appPadding,
  },
  nutritionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.primary_faded,
    marginVertical: theme.sizes.appPadding,
    borderRadius: theme.sizes.radius * 5,
    padding: theme.sizes.appPadding * 0.2,
    paddingHorizontal: theme.sizes.appPadding * 0.5,
  },
  nutritionItem_value: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.radius * 1000,
    padding: theme.sizes.appPadding * 0.5,
    width: 30,
    height: 30,
    textAlign: "center",
    color: theme.colors.white,
  },
  nutritionItem_right: {
    marginHorizontal: theme.sizes.appPadding,
    marginRight: theme.sizes.appPadding * 2,
  },
  nutritionItem_rightText: {
    fontSize: theme.sizes.title_fontSize * 0.9,
  },
  nutritionItem_rightWeight: {
    fontSize: theme.sizes.title_fontSize * 0.8,
  },
  nutrition_avatar: {
    borderRadius: theme.sizes.radius * 1000,
  },
  nutrition_avatarContainer: {
    width: 220,
    height: 200,
  },
  ingredientsContainer: {
    marginTop: theme.sizes.appPadding * 2,
  },
  ingredientsTitle: {
    fontSize: theme.sizes.title_fontSize * 1.5,
  },
  ingredientItems: {
    marginTop: theme.sizes.appPadding * 0.5,
  },
  ingredientText: {
    fontSize: theme.sizes.title_fontSize * 0.9,
    color: theme.colors.gray_variableFade(1),
  },
  watchVideoBtn: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.radius * 5,
    padding: theme.sizes.appPadding * 1.1,
    paddingHorizontal: theme.sizes.appPadding * 2,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 8,
    elevation: 5,
    zIndex: 100000,
  },
  watchVideoBtnText: {
    color: theme.colors.white,
    fontSize: theme.sizes.title_fontSize * 1,
    marginRight: theme.sizes.appPadding,
  },
  preparationContainer: {
    marginTop: theme.sizes.appPadding * 2,
    marginBottom: theme.sizes.appPadding * 10,
  },
  preparationTitle: {
    fontSize: theme.sizes.title_fontSize * 1.5,
  },
  preparationText: {
    fontSize: theme.sizes.title_fontSize * 0.9,
    marginVertical: theme.sizes.appPadding * 0.5,
  },
});

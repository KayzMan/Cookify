import { ImageSourcePropType } from "react-native";

export interface iTrendingRecipe {
  id: number;
  badge: string;
  avatar: ImageSourcePropType | undefined;
  title: string;
  subTitle: string;
  bookmarked: boolean;
}

export interface iTrendingRecipeItem {
  item: iTrendingRecipe;
}

export type homeNavigationProps = {
  recipeDetailScreen: string | undefined;
};

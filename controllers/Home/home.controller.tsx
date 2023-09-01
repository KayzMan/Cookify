// 👇 models
import { iTrendingRecipe } from "../../models/Home/home.model";

export const loadHomeTrendingRecipes = (): iTrendingRecipe[] => {
  const items: iTrendingRecipe[] = [
    {
      id: 1,
      avatar: require("../../assets/images/home/home_image3.jpg"),
      badge: "South",
      bookmarked: true,
      title: "Master Paneer",
      subTitle: "30 Recipes | 1 Serving",
    },
    {
      id: 2,
      avatar: require("../../assets/images/home/home_image4.jpg"),
      badge: "Non Veg",
      bookmarked: false,
      title: "Tandoori Chicken",
      subTitle: "30 Recipes | 1 Serving",
    },
    {
      id: 3,
      avatar: require("../../assets/images/home/home_image1.jpg"),
      badge: "Cheese",
      bookmarked: true,
      title: "Aloo Gobi",
      subTitle: "30 Recipes | 1 Serving",
    },
  ];

  return items;
};

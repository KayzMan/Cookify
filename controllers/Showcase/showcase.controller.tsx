// 👇 models
import { iCategory } from "../../models/Showcase/showcase.model";
import { iShowcaseBottomItem } from "../../models/Showcase/showcase.model";

export const loadShowcaseCategories = (): iCategory[] => {
  let items: iCategory[] = [
    {
      id: 1,
      title: "All",
      icon: "list-circle",
      iconSource: "ion",
    },
    {
      id: 2,
      title: "FastFood",
      icon: "food",
      iconSource: "material",
    },
    {
      id: 3,
      title: "Pizza",
      icon: "pizza",
      iconSource: "material",
    },
    {
      id: 3,
      title: "Cake",
      icon: "cake-variant",
      iconSource: "material",
    },
    {
      id: 4,
      title: "Seafood",
      icon: "fishbowl",
      iconSource: "material",
    },
    {
      id: 5,
      title: "Tea",
      icon: "tea",
      iconSource: "material",
    },
  ];

  return items;
};

export const loadShowcaseBottomItems = (): iShowcaseBottomItem[] => {
  const items: iShowcaseBottomItem[] = [
    {
      id: 1,
      avatar: require("../../assets/images/showcase/showcase_image2.jpg"),
      ingredients: 2,
      likes: 100,
      shortDescription: "Easy, quick and yet so delicious",
      time: "50`",
      title: "Cacoa Maca Walnut Milk",
    },
    {
      id: 2,
      avatar: require("../../assets/images/showcase/showcase_image1.jpg"),
      ingredients: 1,
      likes: 189,
      shortDescription: "Typical winter pastries",
      time: "30`",
      title: "Danish Pecun",
    },
    {
      id: 3,
      avatar: require("../../assets/images/showcase/showcase_image3.jpg"),
      ingredients: 3,
      likes: 100,
      shortDescription: "Easy, quick and yet so delicious",
      time: "1`",
      title: "Maple Syrup Buns",
    },
  ];

  return items;
};

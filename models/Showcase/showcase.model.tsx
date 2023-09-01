import { ImageSourcePropType } from "react-native";

export interface iCategory {
  id: number;
  title: string;
  icon: string | any;
  iconSource: string;
}

export interface iCategoryProps {
  item: iCategory;
}

export interface iShowcaseBottomItem {
  id: number;
  avatar: ImageSourcePropType | undefined;
  title: string;
  shortDescription: string;
  likes: number;
  time: string;
  ingredients: number;
}

export interface iShowcaseBottomItemProps {
  item: iShowcaseBottomItem;
}

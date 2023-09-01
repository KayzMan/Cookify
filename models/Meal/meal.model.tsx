import { ImageSourcePropType } from "react-native";

export interface iCalendarItem {
  id: number;
  date: string;
  day: string;
  selected: boolean;
  calendarItemClicked?: (x: iCalendarItem) => void;
}

export interface iCalendarItemProps {
  item: iCalendarItem;
}

export interface iMealBottomItem {
  id: number;
  topTitle: string;
  avatar: ImageSourcePropType | undefined;
  title: string;
  subTitle: string;
}

export interface iMealBottomItemProps {
  item: iMealBottomItem;
}

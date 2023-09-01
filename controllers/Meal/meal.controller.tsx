// 👇 models
import { iCalendarItem } from "../../models/Meal/meal.model";
import { iMealBottomItem } from "../../models/Meal/meal.model";

export const loadMealCalendarItems = (): iCalendarItem[] => {
  let items: iCalendarItem[] = [
    {
      id: 1,
      date: "01",
      day: "Sun",
      selected: true,
    },
    {
      id: 2,
      date: "02",
      day: "Mon",
      selected: false,
    },
    {
      id: 3,
      date: "03",
      day: "Tue",
      selected: false,
    },
    {
      id: 4,
      date: "04",
      day: "Wed",
      selected: false,
    },
    {
      id: 5,
      date: "05",
      day: "Thu",
      selected: false,
    },
    {
      id: 6,
      date: "06",
      day: "Fri",
      selected: false,
    },
    {
      id: 7,
      date: "07",
      day: "Sat",
      selected: false,
    },
    {
      id: 8,
      date: "08",
      day: "Sun",
      selected: false,
    },
    {
      id: 9,
      date: "09",
      day: "Mon",
      selected: false,
    },
    {
      id: 10,
      date: "10",
      day: "Tue",
      selected: false,
    },
  ];

  return items;
};

export const loadMealBottomItems = (): iMealBottomItem[] => {
  let items: iMealBottomItem[] = [
    {
      id: 1,
      topTitle: "Breakfast",
      title: "Donuts",
      subTitle: "Breakfast Time : 07:30",
      avatar: require("../../assets/images/meal/meal_image3.jpg"),
    },
    {
      id: 2,
      topTitle: "Lunch",
      title: "Sandwich",
      subTitle: "Lunch Time : 13:30",
      avatar: require("../../assets/images/meal/meal_image2.jpg"),
    },
    {
      id: 3,
      topTitle: "Snacks",
      title: "lemonade",
      subTitle: "Snack Time : 16:30",
      avatar: require("../../assets/images/meal/meal_image4.jpg"),
    },
    {
      id: 4,
      topTitle: "Dinner",
      title: "Chicken",
      subTitle: "Dinner Time : 19:30",
      avatar: require("../../assets/images/meal/meal_image1.jpg"),
    },
  ];

  return items;
};

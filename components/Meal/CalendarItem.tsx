import { TouchableOpacity } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { mealStyles } from "../../styles/Meal/Meal.styles";

// 👇 components
import MyText from "../MyText";

// 👇 models
import { iCalendarItem } from "../../models/Meal/meal.model";

export default function CalendarItem({
  id,
  date,
  day,
  selected,
  calendarItemClicked,
}: iCalendarItem) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (calendarItemClicked) {
          calendarItemClicked({ date, day, selected, id });
        }
      }}
      activeOpacity={theme.sizes.touchableOpacity_high}
      style={[
        mealStyles.top_calendarItem,
        selected && { backgroundColor: theme.colors.primary },
      ]}
    >
      <MyText
        fontWeight="bold"
        style={[
          mealStyles.top_calendarItemDate,
          selected && {
            color: theme.colors.white,
          },
        ]}
      >
        {date || "date"}
      </MyText>

      <MyText
        fontWeight="bold"
        style={[
          mealStyles.top_calendarItemDay,
          selected && { color: theme.colors.white },
        ]}
      >
        {day || "day"}
      </MyText>
    </TouchableOpacity>
  );
}

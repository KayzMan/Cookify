import { Text, View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { mealStyles } from "../../styles/Meal/Meal.styles";

// 👇 components
import MyText from "../MyText";
import CalendarView from "./CalendarView";

export default function Top() {
  return (
    <View style={mealStyles.topContainer}>
      {/* 👇 title */}
      <MyText fontWeight="bold" style={mealStyles.topContainer_title}>
        Today's Plan
      </MyText>

      {/* 👇 calendar view */}
      <CalendarView />

      {/* 👇 notification */}
      <View style={mealStyles.top_notification}>
        <MyText fontWeight="bold" style={mealStyles.top_notificationTitle}>
          Vitamins & Minerals
        </MyText>

        <MyText style={mealStyles.top_notificationSubTitle}>
          How Much Should You Take?
        </MyText>

        {/* 👇 stats */}
        <View style={mealStyles.top_notification_stats}>
          {/* 👇 stat item */}
          <View style={mealStyles.top_notification_statItem}>
            <MyText
              fontWeight="bold"
              style={mealStyles.top_notification_statItem_value}
            >
              80
            </MyText>

            <MyText style={mealStyles.top_notification_statItem_text}>
              Vitamin A
            </MyText>
          </View>

          {/* 👇 vertical spacer */}
          <Text style={mealStyles.top_notification_lineSpacer} />

          {/* 👇 stat item */}
          <View style={mealStyles.top_notification_statItem}>
            <MyText
              fontWeight="bold"
              style={mealStyles.top_notification_statItem_value}
            >
              16
            </MyText>

            <MyText style={mealStyles.top_notification_statItem_text}>
              Vitamin B
            </MyText>
          </View>

          {/* 👇 vertical spacer */}
          <Text style={mealStyles.top_notification_lineSpacer} />

          {/* 👇 stat item */}
          <View style={mealStyles.top_notification_statItem}>
            <MyText
              fontWeight="bold"
              style={mealStyles.top_notification_statItem_value}
            >
              97
            </MyText>

            <MyText style={mealStyles.top_notification_statItem_text}>
              Water
            </MyText>
          </View>
        </View>
      </View>
    </View>
  );
}

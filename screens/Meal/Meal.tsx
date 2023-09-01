import { ScrollView } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { mealStyles } from "../../styles/Meal/Meal.styles";

// 👇 components
import Top from "../../components/Meal/Top";
import Bottom from "../../components/Meal/Bottom";

export default function Meal() {
  return (
    <ScrollView
      style={mealStyles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {/* 👇 top */}
      <Top />

      {/* 👇 bottom */}
      <Bottom />
    </ScrollView>
  );
}

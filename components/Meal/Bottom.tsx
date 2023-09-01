import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { FlashList } from "@shopify/flash-list";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { mealStyles } from "../../styles/Meal/Meal.styles";

// 👇 components
import BottomItem from "./BottomItem";

// 👇 models
import {
  iMealBottomItem,
  iMealBottomItemProps,
} from "../../models/Meal/meal.model";

// 👇 controllers
import { loadMealBottomItems } from "../../controllers/Meal/meal.controller";

export default function Bottom() {
  const [bottomItems] = useState<iMealBottomItem[]>(loadMealBottomItems());

  // 👇 bottom items renderItem
  const renderItem = useCallback(
    (props: iMealBottomItemProps) => <BottomItem {...props.item} />,
    []
  );

  // 👇 bottom items keyExtractor
  const keyExtractor = useCallback(
    (item: iMealBottomItem, index: number) =>
      `mealBottomItem-#${item.id}-#${index}`,
    []
  );

  return (
    <View style={mealStyles.bottomContainer}>
      <FlashList
        estimatedItemSize={115}
        data={bottomItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

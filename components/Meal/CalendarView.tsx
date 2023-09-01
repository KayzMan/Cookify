import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { FlashList } from "@shopify/flash-list";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { mealStyles } from "../../styles/Meal/Meal.styles";

// 👇 components
import CalendarItem from "./CalendarItem";

// 👇 models
import {
  iCalendarItem,
  iCalendarItemProps,
} from "../../models/Meal/meal.model";

// 👇 controllers
import { loadMealCalendarItems } from "../../controllers/Meal/meal.controller";

export default function CalendarView() {
  const [calendarItems, setCalendarItems] = useState<iCalendarItem[]>(
    loadMealCalendarItems()
  );

  // 👇 handler when calendar item is clicked
  const calendarItemClicked = useCallback((calendarItem: iCalendarItem) => {
    const updateIndx: number = calendarItems.findIndex(
      (item) => item?.id === calendarItem?.id
    );

    const calendarItems_copy = [...calendarItems];

    // 👇 deselect all other calendar items
    const updated_items = calendarItems_copy.map((item) => ({
      ...item,
      selected: false,
    }));

    if (updateIndx >= 0) {
      updated_items[updateIndx] = { ...calendarItem, selected: true };
      setCalendarItems(updated_items);
    }
  }, []);

  // 👇 calendar items renderItem
  const renderItem = useCallback(
    (props: iCalendarItemProps) => (
      <CalendarItem {...props.item} calendarItemClicked={calendarItemClicked} />
    ),
    []
  );

  // 👇 calendar items keyExtractor
  const keyExtractor = useCallback(
    (item: iCalendarItem, index: number) =>
      `calendarItem-#${item.id}-#${index}`,
    []
  );

  return (
    <View style={mealStyles.top_calendarView}>
      <FlashList
        estimatedItemSize={50}
        data={calendarItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

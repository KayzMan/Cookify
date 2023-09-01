import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { FlashList } from "@shopify/flash-list";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { showcaseStyles } from "../../styles/Showcase/Showcase.styles";

// 👇 components
import CategoryItem from "./CategoryItem";

// 👇 models
import {
  iCategory,
  iCategoryProps,
} from "../../models/Showcase/showcase.model";

// 👇 controllers
import { loadShowcaseCategories } from "../../controllers/Showcase/showcase.controller";

export default function Categories() {
  const [categories] = useState<iCategory[]>(loadShowcaseCategories());

  // 👇 categories renderItem
  const renderItem = useCallback(
    (props: iCategoryProps) => <CategoryItem {...props.item} />,
    []
  );

  // 👇 categories keyExtractor
  const keyExtractor = useCallback(
    (item: iCategory, index: number) => `categoryItem-#${item.id}-#${index}`,
    []
  );

  return (
    <View style={showcaseStyles.categoriesContainer}>
      <FlashList
        estimatedItemSize={80}
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

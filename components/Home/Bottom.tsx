import { View } from "react-native";
import React, { useCallback, useState } from "react";
import { FlashList } from "@shopify/flash-list";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { homeStyles } from "../../styles/Home/Home.styles";

// 👇 components
import MyText from "../MyText";
import BottomItem from "./BottomItem";

// 👇 controllers
import { loadHomeTrendingRecipes } from "../../controllers/Home/home.controller";

// 👇 models
import {
  iTrendingRecipeItem,
  iTrendingRecipe,
} from "../../models/Home/home.model";

export default function Bottom() {
  const [trendingRecipes, _setTrendingRecipes] = useState<iTrendingRecipe[]>(
    loadHomeTrendingRecipes()
  );

  // 👇 trending recipes renderItem
  const renderItem = useCallback(
    (props: iTrendingRecipeItem) => <BottomItem item={props.item} />,
    []
  );

  // 👇 trending recipes keyExtractor
  const keyExtractor = useCallback(
    (item: iTrendingRecipe, index: number) =>
      `trendingRecipeItem-#${item.id}-#${index}`,
    []
  );

  return (
    <View style={homeStyles.bottomContainer}>
      <MyText style={[homeStyles.bottom_title]} fontWeight="bold">
        Trending Recipe
      </MyText>

      {/* 👇 trending recipe items */}
      <FlashList
        data={trendingRecipes}
        estimatedItemSize={350}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

import { View } from "react-native";
import React, { useCallback, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { ActivityIndicator } from "react-native-paper";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { showcaseStyles } from "../../styles/Showcase/Showcase.styles";

// 👇 components
import BottomItem from "./BottomItem";

// 👇 models
import {
  iShowcaseBottomItem,
  iShowcaseBottomItemProps,
} from "../../models/Showcase/showcase.model";

// 👇 controllers
import { loadShowcaseBottomItems } from "../../controllers/Showcase/showcase.controller";

export default function Bottom() {
  const [bottomItems] = useState<iShowcaseBottomItem[]>(
    loadShowcaseBottomItems()
  );

  // 👇 bottom items renderItem
  const renderItem = useCallback(
    (props: iShowcaseBottomItemProps) => <BottomItem {...props.item} />,
    []
  );

  // 👇 bottom items keyExtractor
  const keyExtractor = useCallback(
    (item: iShowcaseBottomItem, index: number) =>
      `bottomItem-#${item.id}-#${index}`,
    []
  );

  return (
    <View style={showcaseStyles.bottomContainer}>
      <FlashList
        estimatedItemSize={400}
        data={bottomItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <ActivityIndicator
            theme={theme}
            color={theme.colors.primary}
            animating={true}
            size={"small"}
          />
        }
        ListFooterComponentStyle={{
          marginVertical: theme.sizes.appPadding * 2,
        }}
        scrollEnabled={false}
      />
    </View>
  );
}

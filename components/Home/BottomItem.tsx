import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { homeStyles } from "../../styles/Home/Home.styles";

// 👇 components
import MyText from "../MyText";

// 👇 models
import {
  iTrendingRecipe,
  iTrendingRecipeItem,
  homeNavigationProps,
} from "../../models/Home/home.model";

export default function BottomItem(props: iTrendingRecipeItem) {
  let item: iTrendingRecipe = props.item;
  const [bookmarked, setBookmarked] = useState<boolean>(item.bookmarked);
  const navigation = useNavigation<NavigationProp<homeNavigationProps>>();

  return (
    <TouchableOpacity
      activeOpacity={theme.sizes.touchableOpacity_high}
      onPress={() => {
        navigation.navigate("recipeDetailScreen");
      }}
      style={homeStyles.bottomItem}
    >
      {/* 👇 avatar image */}
      <Avatar
        source={item.avatar}
        avatarStyle={homeStyles.bottomItem_avatar}
        containerStyle={homeStyles.bottomItem_avatarContainer}
      />

      {/* 👇 badge */}
      <MyText fontWeight="bold" style={homeStyles.bottomItem_badge}>
        {item.badge || "badge"}
      </MyText>

      {/* 👇 bottom */}
      <View style={homeStyles.bottomItem_bottom}>
        {/* 👇 top */}
        <View style={homeStyles.bottomItem_bottomTop}>
          <MyText fontWeight="bold" style={homeStyles.bottomItem_title}>
            {item.title || "title"}
          </MyText>

          {/* icon */}
          <TouchableOpacity
            onPress={() => {
              setBookmarked(!bookmarked);
            }}
            activeOpacity={theme.sizes.touchableOpacity_medium}
          >
            <MaterialCommunityIcons
              name={bookmarked ? "bookmark" : "bookmark-outline"}
              size={theme.sizes.icon}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>

        {/* 👇 sub title */}
        <MyText style={homeStyles.bottomItem_subTitle}>
          {item.subTitle || "sub-title"}
        </MyText>
      </View>
    </TouchableOpacity>
  );
}

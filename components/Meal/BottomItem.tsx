import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { mealStyles } from "../../styles/Meal/Meal.styles";

// 👇 components
import MyText from "../MyText";

// 👇 models
import { iMealBottomItem } from "../../models/Meal/meal.model";
import { homeNavigationProps } from "../../models/Home/home.model";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

export default function BottomItem({
  avatar,
  subTitle,
  title,
  topTitle,
}: iMealBottomItem) {
  const navigation = useNavigation<NavigationProp<homeNavigationProps>>();

  return (
    <TouchableOpacity
      activeOpacity={theme.sizes.touchableOpacity_high}
      onPress={() => {
        navigation.navigate("recipeDetailScreen");
      }}
      style={mealStyles.bottomItem}
    >
      {/* 👇 top title */}
      <MyText style={mealStyles.bottomItem_topTitle}>
        {topTitle || "topTitle"}
      </MyText>

      <View style={mealStyles.bottomItem_bottom}>
        {/* 👇 left */}
        <View style={mealStyles.bottomItem_left}>
          {/* 👇 avatar */}
          <Avatar
            source={avatar}
            size={"large"}
            avatarStyle={mealStyles.bottomItem_avatar}
            containerStyle={mealStyles.bottomItem_avatarContainer}
          />

          {/* 👇 details */}
          <View style={mealStyles.bottomItem_leftDetails}>
            <MyText style={mealStyles.bottomItem_leftTitle} fontWeight="bold">
              {title || "title"}
            </MyText>

            <MyText
              fontWeight="semi-bold"
              style={mealStyles.bottomItem_leftSubTitle}
            >
              {subTitle || "subTitle"}
            </MyText>
          </View>
        </View>

        {/* 👇 right */}
        <TouchableOpacity
          activeOpacity={theme.sizes.touchableOpacity_medium}
          onPress={() => {
            navigation.navigate("recipeDetailScreen");
          }}
          style={mealStyles.bottomItem_right}
        >
          <MaterialCommunityIcons
            {...common_icon_props}
            color={theme.colors.black}
            name="chevron-right"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

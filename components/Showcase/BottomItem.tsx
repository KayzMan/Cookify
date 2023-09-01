import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { showcaseStyles } from "../../styles/Showcase/Showcase.styles";

// 👇 components
import MyText from "../MyText";

// 👇 models
import { iShowcaseBottomItem } from "../../models/Showcase/showcase.model";
import { homeNavigationProps } from "../../models/Home/home.model";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

export default function BottomItem({
  avatar,
  ingredients,
  likes,
  shortDescription,
  time,
  title,
}: iShowcaseBottomItem) {
  const navigation = useNavigation<NavigationProp<homeNavigationProps>>();

  return (
    <TouchableOpacity
      activeOpacity={theme.sizes.touchableOpacity_high}
      onPress={() => {
        navigation.navigate("recipeDetailScreen");
      }}
      style={showcaseStyles.bottomItem}
    >
      {/* 👇 avatar */}
      <Avatar
        source={avatar}
        avatarStyle={showcaseStyles.bottomItemAvatar}
        containerStyle={showcaseStyles.bottomItemAvatarContainer}
      />

      {/* 👇 details */}
      <View style={showcaseStyles.bottomItemDetails}>
        {/* 👇 top */}
        <View style={showcaseStyles.bottomItemDetails_top}>
          <MyText
            fontWeight="bold"
            style={showcaseStyles.bottomItemDetails_topTitle}
          >
            {title || "title"}
          </MyText>
          <MyText style={showcaseStyles.bottomItemDetails_topDescription}>
            {shortDescription || "description"}
          </MyText>
        </View>

        {/* 👇 bottom */}
        <View style={showcaseStyles.bottomItemDetail_bottom}>
          <View style={showcaseStyles.bottomItemDetail_bottomItem}>
            {/* 👇 likes icon */}
            <MaterialCommunityIcons
              {...common_icon_props}
              name="heart-outline"
              size={theme.sizes.icon * 0.6}
              color={theme.colors.black}
            />

            <MyText
              fontWeight="bold"
              style={showcaseStyles.bottomItemDetail_bottomItemText}
            >
              {likes}
            </MyText>
          </View>

          <View style={showcaseStyles.bottomItemDetail_bottomItem}>
            {/* 👇 time icon */}
            <MaterialCommunityIcons
              {...common_icon_props}
              name="clock-outline"
              size={theme.sizes.icon * 0.6}
              color={theme.colors.black}
            />

            <MyText
              fontWeight="bold"
              style={showcaseStyles.bottomItemDetail_bottomItemText}
            >
              {time}
            </MyText>
          </View>

          <View style={showcaseStyles.bottomItemDetail_bottomItem}>
            <MyText
              fontWeight="bold"
              style={[showcaseStyles.bottomItemDetail_bottomItemText]}
            >
              {ingredients > 1
                ? `${ingredients} ingredients`
                : `${ingredients} ingredient`}
            </MyText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

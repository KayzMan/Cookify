import { TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { showcaseStyles } from "../../styles/Showcase/Showcase.styles";

// 👇 components
import MyText from "../MyText";

// 👇 models
import { iCategory } from "../../models/Showcase/showcase.model";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

export default function CategoryItem({ title, icon, iconSource }: iCategory) {
  return (
    <TouchableOpacity
      activeOpacity={theme.sizes.touchableOpacity_high}
      onPress={() => {}}
      style={showcaseStyles.categoryItem}
    >
      {/* 👇 icon */}
      {iconSource === "ion" && <Ionicons {...common_icon_props} name={icon} />}

      {iconSource === "material" && (
        <MaterialCommunityIcons {...common_icon_props} name={icon} />
      )}

      {/* title */}
      <MyText fontWeight="medium" style={showcaseStyles.categoryItem_title}>
        {title || "title"}
      </MyText>
    </TouchableOpacity>
  );
}

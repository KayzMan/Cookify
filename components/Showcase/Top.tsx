import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { showcaseStyles } from "../../styles/Showcase/Showcase.styles";

// 👇 components
import MyTextInput from "../MyTextInput";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

export default function Top() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <View style={showcaseStyles.topContainer}>
      {/* 👇 text input */}
      <View style={showcaseStyles.top_textFieldWrapper}>
        <Ionicons
          name="search"
          {...common_icon_props}
          size={theme.sizes.icon * 0.9}
        />

        <MyTextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={showcaseStyles.top_textFieldBox}
          contentStyle={showcaseStyles.top_textField}
        />
      </View>

      <TouchableOpacity
        style={showcaseStyles.iconContainer}
        activeOpacity={theme.sizes.touchableOpacity_medium}
        onPress={() => {}}
      >
        <Ionicons
          {...common_icon_props}
          name="ios-restaurant"
          size={theme.sizes.icon * 0.9}
        />
      </TouchableOpacity>
    </View>
  );
}

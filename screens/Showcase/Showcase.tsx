import { ScrollView } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { showcaseStyles } from "../../styles/Showcase/Showcase.styles";

// 👇 components
import Top from "../../components/Showcase/Top";
import Categories from "../../components/Showcase/Categories";
import Bottom from "../../components/Showcase/Bottom";

export default function Showcase() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={showcaseStyles.container}
      nestedScrollEnabled={true}
    >
      {/* 👇 top */}
      <Top />

      {/* 👇 middle categories */}
      <Categories />

      {/* 👇 bottom items */}
      <Bottom />
    </ScrollView>
  );
}

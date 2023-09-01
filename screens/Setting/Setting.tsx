import { ScrollView } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { settingStyles } from "../../styles/Setting/Setting.styles";

// 👇 components
import Top from "../../components/Setting/Top";
import Bottom from "../../components/Setting/Bottom";

export default function Setting() {
  return (
    <ScrollView
      style={settingStyles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {/* 👇 top */}
      <Top />

      {/* 👇 bottom */}
      <Bottom />
    </ScrollView>
  );
}

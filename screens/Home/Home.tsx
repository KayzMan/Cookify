import { useGlobalContext } from "../../context/MyGlobalContext";
import { View, Text, ScrollView } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { homeStyles } from "../../styles/Home/Home.styles";

// 👇 components
import Top from "../../components/Home/Top";
import Bottom from "../../components/Home/Bottom";

// 👇 models

// 👇 controllers

export default function Home() {
  // 👇 check if caveat font loaded successfully
  const { caveat_fontLoaded } = useGlobalContext();

  return (
    <ScrollView
      style={homeStyles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {/* top */}
      <Top />

      {/* bottom */}
      <Bottom />
    </ScrollView>
  );
}

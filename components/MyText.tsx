import { useGlobalContext } from "../context/MyGlobalContext";
import { Text } from "react-native";
import React, { useCallback } from "react";

// 👇 theme
import { theme } from "../theme/theme";

// 👇 models
import { iMyText } from "../models/myText.model";

export default function MyText({
  children,
  style,
  fontWeight,
  numberOfLines,
}: iMyText) {
  // 👇 check if caveat font loaded successfully
  const { caveat_fontLoaded } = useGlobalContext();

  // 👇 get font based on font weight
  const getFontFamily = useCallback((weight: string | undefined) => {
    switch (weight) {
      case "bold":
        return theme.font.caveat_bold;
      case "semi-bold":
        return theme.font.caveat_semiBold;
      case "medium":
        return theme.font.caveat_medium;
      case "regular":
        return theme.font.caveat;
      default:
        return theme.font.caveat;
    }
  }, []);

  return (
    <Text
      // numberOfLines={numberOfLines || 1}
      numberOfLines={numberOfLines}
      style={[
        { color: theme.colors.black },
        style,
        caveat_fontLoaded && { fontFamily: getFontFamily(fontWeight) },
      ]}
    >
      {children}
    </Text>
  );
}

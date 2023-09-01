import { useGlobalContext } from "../context/MyGlobalContext";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../theme/theme";

// 👇 styles
import { onBoardingStyles } from "../styles/OnBoarding.styles";

// 👇 components
import MyText from "../components/MyText";

// 👇 models
import { navigationProps } from "../models/onBoarding.model";

export default function OnBoardingScreen() {
  const navigation = useNavigation<NavigationProp<navigationProps>>();

  // 👇 check if font loaded successfully
  const { caveat_fontLoaded } = useGlobalContext();

  return (
    <View style={onBoardingStyles.container}>
      {/* app title */}
      <MyText
        style={[
          onBoardingStyles.title,
          caveat_fontLoaded && {
            fontSize: theme.sizes.title_fontSize * 2.5,
          },
        ]}
      >
        Welcome to Cookify
      </MyText>

      {/* avatar */}
      <Avatar
        source={require("../assets/images/onBoarding/main1.jpg")}
        avatarStyle={onBoardingStyles.avatar}
        containerStyle={onBoardingStyles.avatarContainer}
      />

      {/* action buttons */}
      <View style={onBoardingStyles.actionButtons}>
        <TouchableOpacity
          style={onBoardingStyles.actionButtonTransparent}
          onPress={() => {
            navigation.navigate("signUpScreen");
          }}
          activeOpacity={theme.sizes.touchableOpacity_high}
        >
          <MyText
            style={[
              {
                fontSize: theme.sizes.title_fontSize * 0.9,
                color: theme.colors.primary,
                textAlign: "center",
              },
            ]}
            fontWeight="bold"
          >
            SIGN UP
          </MyText>
        </TouchableOpacity>

        <TouchableOpacity
          style={onBoardingStyles.actionButton}
          onPress={() => {
            navigation.navigate("loginScreen");
          }}
          activeOpacity={theme.sizes.touchableOpacity_high}
        >
          <MyText style={[onBoardingStyles.actionButtonText]} fontWeight="bold">
            LOG IN
          </MyText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

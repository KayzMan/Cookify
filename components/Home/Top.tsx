import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { homeStyles } from "../../styles/Home/Home.styles";

// 👇 components
import MyText from "../MyText";

// 👇 models
import { homeNavigationProps } from "../../models/Home/home.model";

export default function Top() {
  const navigation = useNavigation<NavigationProp<homeNavigationProps>>();
  const [bookmarked, setBookmarked] = React.useState<boolean>(false);

  return (
    <View style={homeStyles.topContainer}>
      {/* 👇 top greeting */}
      <View style={homeStyles.top_top}>
        {/* 👇 title  */}
        <MyText style={[homeStyles.top_topTitle]} fontWeight="bold">
          Hello Ngoni,
        </MyText>

        {/* 👇 sub title */}
        <MyText style={[homeStyles.top_topSubTitle]} fontWeight="semi-bold">
          Excited to cook something new today?
        </MyText>
      </View>

      {/* 👇 notification container */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("recipeDetailScreen");
        }}
        activeOpacity={theme.sizes.touchableOpacity_high}
      >
        <View style={homeStyles.top_notification}>
          {/* 👇 left icon*/}
          <MaterialCommunityIcons
            name="chef-hat"
            size={theme.sizes.icon * 1.5}
            color={theme.colors.primary}
          />

          {/* 👇 right */}
          <View style={homeStyles.top_notificationRight}>
            <MyText style={[homeStyles.top_notificationText]} fontWeight="bold">
              You have 12 recipes that
            </MyText>

            <MyText style={[homeStyles.top_notificationText]} fontWeight="bold">
              you haven't tried yet.
            </MyText>

            <MyText style={[homeStyles.top_notificationLink]} fontWeight="bold">
              See Recipes
            </MyText>
          </View>
        </View>
      </TouchableOpacity>

      {/* 👇 home recipe image */}
      <TouchableOpacity
        activeOpacity={theme.sizes.touchableOpacity_high}
        style={homeStyles.top_homeImage}
        onPress={() => {
          navigation.navigate("recipeDetailScreen");
        }}
      >
        {/* 👇 avatar */}
        <Avatar
          source={require("../../assets/images/home/home_image2.jpg")}
          avatarStyle={homeStyles.top_homeImageAvatar}
          containerStyle={homeStyles.top_homeImageAvatarContainer}
        />

        {/* 👇 top text */}
        <View style={homeStyles.top_homeImageTop}>
          <MyText style={[homeStyles.top_homeImageTopText]} fontWeight="bold">
            Non Veg
          </MyText>

          {/* 👇 bookmark icon */}
          <TouchableOpacity
            activeOpacity={theme.sizes.touchableOpacity_medium}
            onPress={() => {
              setBookmarked(!bookmarked);
            }}
          >
            <MaterialCommunityIcons
              name={bookmarked ? "bookmark" : "bookmark-outline"}
              size={theme.sizes.icon * 1.2}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>

        {/* 👇 bottom text */}
        <LinearGradient
          colors={[
            theme.colors.black_variableFade(0.0),
            theme.colors.black_variableFade(0.0),
            theme.colors.black_variableFade(0.2),
            theme.colors.black_variableFade(0.3),
            theme.colors.primary_variableFade(0.3),
            theme.colors.primary_variableFade(0.5),
            theme.colors.primary_variableFade(0.9),
          ]}
          style={homeStyles.top_homeImageBottomLinearGrad}
        >
          <View style={homeStyles.top_homeImageBottom}>
            <MyText
              style={[homeStyles.top_homeImageBottomTitle]}
              fontWeight="bold"
            >
              Chicken Makhani
            </MyText>

            <MyText
              style={[homeStyles.top_homeImageBottomTitle]}
              fontWeight="bold"
            >
              South Special
            </MyText>

            <MyText style={[homeStyles.top_homeImageBottomSubTitle]}>
              30 Recipes | 1 Serving
            </MyText>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

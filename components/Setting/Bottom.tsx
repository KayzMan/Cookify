import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { settingStyles } from "../../styles/Setting/Setting.styles";

// 👇 component
import MyText from "../MyText";

// 👇 models
import { navigationProps } from "../../models/onBoarding.model";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

export default function Bottom() {
  const navigation = useNavigation<NavigationProp<navigationProps>>();
  const [notification, setNotification] = useState<boolean>(true);
  const [offlineOn, setOfflineOn] = useState<boolean>(false);

  return (
    <>
      <View style={settingStyles.bottomContainer}>
        {/* 👇 bottom items */}
        <View style={settingStyles.bottomItems}>
          {/* 👇 bottom item */}
          <View style={settingStyles.bottomItem}>
            <MyText fontWeight="bold" style={settingStyles.bottomItemTitle}>
              Option
            </MyText>

            {/* 👇 items */}
            <View style={settingStyles.bottomItem_item}>
              <MyText style={settingStyles.bottomItem_itemText}>
                Notifications
              </MyText>

              {/* 👇 icon / switch */}
              <Switch
                value={notification}
                onValueChange={setNotification}
                theme={theme}
                color={theme.colors.primary}
                trackColor={{
                  false: theme.colors.primary_variableFade(0.4),
                  true: theme.colors.primary_variableFade(0.5),
                }}
              />
            </View>

            {/* item */}
            <View style={settingStyles.bottomItem_item}>
              <MyText style={settingStyles.bottomItem_itemText}>
                Language
              </MyText>

              {/* 👇 icon / switch */}
              <MaterialCommunityIcons
                {...common_icon_props}
                name="chevron-right"
                color={theme.colors.black}
              />
            </View>

            {/* item */}
            <View style={settingStyles.bottomItem_item}>
              <MyText style={settingStyles.bottomItem_itemText}>
                Offline Reading
              </MyText>

              {/* 👇 icon / switch */}
              <Switch
                value={offlineOn}
                onValueChange={setOfflineOn}
                theme={theme}
                color={theme.colors.primary}
                trackColor={{
                  false: theme.colors.primary_variableFade(0.4),
                  true: theme.colors.primary_variableFade(0.5),
                }}
              />
            </View>
          </View>

          {/* 👇 bottom item */}
          <View style={settingStyles.bottomItem}>
            <MyText fontWeight="bold" style={settingStyles.bottomItemTitle}>
              Account
            </MyText>

            {/* 👇 items */}
            <View style={settingStyles.bottomItem_item}>
              <MyText style={settingStyles.bottomItem_itemText}>
                Personal Information
              </MyText>

              {/* 👇 icon / switch */}
              <MaterialCommunityIcons
                {...common_icon_props}
                name="chevron-right"
                color={theme.colors.black}
              />
            </View>

            {/* item */}
            <View style={settingStyles.bottomItem_item}>
              <MyText style={settingStyles.bottomItem_itemText}>Country</MyText>

              {/* 👇 icon / switch */}
              <MaterialCommunityIcons
                {...common_icon_props}
                name="chevron-right"
                color={theme.colors.black}
              />
            </View>

            {/* item */}
            <View style={settingStyles.bottomItem_item}>
              <MyText style={settingStyles.bottomItem_itemText}>
                Favorite Recipes
              </MyText>

              {/* 👇 icon / switch */}
              <MaterialCommunityIcons
                {...common_icon_props}
                name="chevron-right"
                color={theme.colors.black}
              />
            </View>
          </View>
        </View>

        {/* 👇 logout button */}
        <TouchableOpacity
          style={settingStyles.bottom_button}
          activeOpacity={theme.sizes.touchableOpacity_medium}
          onPress={() => {
            navigation.navigate("onBoardingScreen");
          }}
        >
          <MyText fontWeight="bold" style={settingStyles.bottom_buttonText}>
            LOGOUT
          </MyText>
        </TouchableOpacity>
      </View>
      {/* 👇 ask for help container */}
      <TouchableOpacity
        activeOpacity={theme.sizes.touchableOpacity_high}
        onPress={() => {}}
        style={settingStyles.bottom_helpContainer}
      >
        {/* 👇 icon */}
        <MaterialCommunityIcons name="headphones" {...common_icon_props} />

        <MyText fontWeight="bold" style={settingStyles.bottom_helpText}>
          Feel Free to Ask, We Ready to Help
        </MyText>
      </TouchableOpacity>
    </>
  );
}

import { useGlobalContext } from "../context/MyGlobalContext";
import { useCallback } from "react";
import { View, Text } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// 👇 initialize the tabs navigator
const Tab = createMaterialTopTabNavigator();

// 👇 theme
import { theme } from "../theme/theme";

// 👇 styles
import { bottomTabsStyles } from "../styles/BottomTabs/BottomTabs.styles";

// 👇 screens
import Home from "../screens/Home/Home";
import Showcase from "../screens/Showcase/Showcase";
import Meal from "../screens/Meal/Meal";
import Setting from "../screens/Setting/Setting";
import { TouchableOpacity } from "react-native";

export default function BottomTabs() {
  // 👇 check if caveat font loaded successfully
  const { caveat_fontLoaded } = useGlobalContext();

  // 👇 get tab icon based on passed in index
  const getTabIcon = useCallback((index: number, focused: boolean) => {
    let name: any;

    switch (index) {
      case 0:
        name = focused ? "home" : "home-outline";
        break;
      case 1:
        return (
          <Ionicons
            name={focused ? "book" : "book-outline"}
            color={theme.colors.primary}
            size={theme.sizes.icon * 0.9}
          />
        );
      case 2:
        name = focused ? "hamburger" : "food-outline";
        break;
      case 3:
        name = focused ? "account" : "account-outline";
        break;
      default:
        name = "home";
    }

    return (
      <MaterialCommunityIcons
        name={name}
        color={theme.colors.primary}
        size={theme.sizes.icon * 0.9}
      />
    );
  }, []);

  // 👇 custom tab bar
  const tabBar = useCallback((props: MaterialTopTabBarProps) => {
    let { descriptors, jumpTo, layout, navigation, position, state } = props;

    let keys: string[] = Object.keys(descriptors);

    // 👇 loop through the descriptors and create the tabs
    const createTabItems = () => {
      return keys.map((key, _index) => {
        let tabItem = descriptors[key];
        let isFocused = tabItem.navigation.isFocused();

        return (
          // 👇 tab item
          <TouchableOpacity
            onPress={() => {
              jumpTo(tabItem.route.key);
            }}
            activeOpacity={theme.sizes.touchableOpacity_medium}
            style={[
              bottomTabsStyles.tabItem,
              {
                flex: isFocused ? 1 / 3 : 1 / 5,
              },
            ]}
            key={`tabItem-#${_index}-#${tabItem.route.key}`}
          >
            {getTabIcon(_index, isFocused)}
            {isFocused && (
              <Text
                numberOfLines={1}
                style={[
                  bottomTabsStyles.tabItemText,
                  caveat_fontLoaded && {
                    fontFamily: "caveat",
                    fontSize: theme.sizes.title_fontSize,
                  },
                ]}
              >
                {tabItem.route.name}
              </Text>
            )}
          </TouchableOpacity>
        );
      });
    };

    return <View style={bottomTabsStyles.tabBar}>{createTabItems()}</View>;
  }, []);

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBar={(props: MaterialTopTabBarProps) => tabBar(props)}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="showcase" component={Showcase} />
      <Tab.Screen name="Meal" component={Meal} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

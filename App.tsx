import { LogBox, SafeAreaView, StatusBar, Text } from "react-native";
import {
  Provider as PaperProvider,
  useTheme,
  MD3Colors,
} from "react-native-paper";
import { useFonts } from "expo-font";
import { MyGlobalContext } from "./context/MyGlobalContext";

// 👇 theme
import { theme } from "./theme/theme";

// 👇 styles
import { appStyles } from "./styles/App.styles";

// 👇 components
import Navigator from "./navigation/Navigator";
import { useEffect } from "react";

export type GlobalContext = {
  fontLoaded: boolean;
};

export default function App() {
  const [caveat_fontLoaded] = useFonts({
    caveat: require("./assets/fonts/caveat/Caveat-Regular.ttf"),
    caveat_bold: require("./assets/fonts/caveat/Caveat-Bold.ttf"),
    caveat_medium: require("./assets/fonts/caveat/Caveat-Medium.ttf"),
    caveat_semiBold: require("./assets/fonts/caveat/Caveat-SemiBold.ttf"),
  });

  // 👇 configure the theme
  const temp_theme = useTheme();
  temp_theme.colors.primary = theme.colors.primary;
  temp_theme.colors.secondary = theme.colors.secondary;
  temp_theme.colors.secondaryContainer = "transparent";

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <MyGlobalContext.Provider value={{ caveat_fontLoaded }}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={appStyles.container}>
          <StatusBar barStyle="default" />
          <Navigator />
        </SafeAreaView>
      </PaperProvider>
    </MyGlobalContext.Provider>
  );
}

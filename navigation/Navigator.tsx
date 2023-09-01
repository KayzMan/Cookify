import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 👇 initialize the stack navigator
const Stack = createNativeStackNavigator();

// 👇 theme
import { theme } from "../theme/theme";

// 👇 screens
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import BottomTabs from "./BottomTabs";
import RecipeDetail from "../screens/Home/RecipeDetail";

// 👇 common options shared by all screens.
const common_screen_options = {};

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onBoardingScreen"
        screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
          statusBarColor: theme.colors.fadedBlack,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          animation: "flip",
        }}
      >
        <Stack.Screen name="onBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="loginScreen" component={Login} />
        <Stack.Screen name="signUpScreen" component={SignUp} />
        <Stack.Screen name="forgotPasswordScreen" component={ForgotPassword} />
        <Stack.Screen name="bottomTabs" component={BottomTabs} />
        <Stack.Screen name="recipeDetailScreen" component={RecipeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

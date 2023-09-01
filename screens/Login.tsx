import { useGlobalContext } from "../context/MyGlobalContext";
import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../theme/theme";

// 👇 styles
import { signUpStyles } from "../styles/SignUp/SignUp.styles";

// 👇 components
import MyText from "../components/MyText";

// 👇 models
import { navigationProps } from "../models/onBoarding.model";

export default function SignUp() {
  const navigation = useNavigation<NavigationProp<navigationProps>>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 👇 check if caveat font loaded successfully
  const { caveat_fontLoaded } = useGlobalContext();

  const text_input_props = useCallback(
    () => ({
      style: signUpStyles.inputField_box,
      contentStyle: [
        signUpStyles.inputField,
        caveat_fontLoaded && { fontFamily: theme.font.caveat_medium },
      ],
      underlineColor: "transparent",
      underlineColorAndroid: "transparent",
      activeUnderlineColor: "transparent",
      activeOutlineColor: theme.colors.primary,
      cursorColor: theme.colors.primary,
      placeholderTextColor: theme.colors.primary,
      theme: theme,
    }),
    []
  );

  return (
    <ScrollView style={signUpStyles.container}>
      {/* 👇 top icon and title */}
      <View style={signUpStyles.top}>
        <Ionicons
          name="book"
          size={theme.sizes.icon * 2}
          color={theme.colors.primary}
          style={signUpStyles.topIcon}
        />

        <MyText style={[signUpStyles.title]} fontWeight="bold">
          Login
        </MyText>
      </View>

      {/* input text fields */}
      <View style={signUpStyles.inputFieldsContainer}>
        {/* input field */}
        <View style={signUpStyles.inputFieldWrapper}>
          <MaterialCommunityIcons
            name="email-outline"
            size={theme.sizes.icon}
            color={theme.colors.primary}
          />
          <TextInput
            {...text_input_props()}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* input field */}
        <View style={signUpStyles.inputFieldWrapper}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={theme.sizes.icon}
            color={theme.colors.primary}
          />
          <TextInput
            {...text_input_props()}
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      {/* 👇 forgot password label button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("forgotPasswordScreen");
        }}
        activeOpacity={theme.sizes.touchableOpacity_medium}
        style={signUpStyles.linkButton}
      >
        <MyText style={[signUpStyles.linkButtonText]}>Forgot Password?</MyText>
      </TouchableOpacity>

      {/* 👇 create an account button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("bottomTabs");
        }}
        activeOpacity={theme.sizes.touchableOpacity_medium}
        style={signUpStyles.actionButton}
      >
        <MyText style={[signUpStyles.actionButtonText]} fontWeight="bold">
          Login
        </MyText>
      </TouchableOpacity>

      {/* 👇 already have an account label button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("signUpScreen");
        }}
        activeOpacity={theme.sizes.touchableOpacity_medium}
      >
        <MyText style={[signUpStyles.linkButtonUnderlined]}>
          I don't have an account
        </MyText>
      </TouchableOpacity>
    </ScrollView>
  );
}

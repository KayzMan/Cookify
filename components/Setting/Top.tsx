import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { settingStyles } from "../../styles/Setting/Setting.styles";

// 👇 components
import MyText from "../MyText";

export default function Top() {
  return (
    <View style={settingStyles.topContainer}>
      {/* 👇 left avatar */}
      <Avatar
        source={require("../../assets/images/avatars/avatar_image1.jpg")}
        rounded
        avatarStyle={settingStyles.top_avatar}
        containerStyle={settingStyles.top_avatarContainer}
      />

      {/* 👇 right details */}
      <View style={settingStyles.top_rightDetails}>
        <MyText fontWeight="bold" style={settingStyles.top_rightDetails_name}>
          Ngoni Katsidzira
        </MyText>

        <MyText style={settingStyles.top_rightDetails_email}>
          ngonik8@gmail.com
        </MyText>

        <TouchableOpacity
          activeOpacity={theme.sizes.touchableOpacity_medium}
          onPress={() => {}}
          style={settingStyles.top_rightDetails_button}
        >
          <MyText style={settingStyles.top_rightDetails_buttonText}>
            Edit Profile
          </MyText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { useGlobalContext } from "../context/MyGlobalContext";
import { TextInput } from "react-native-paper";

// 👇 theme
import { theme } from "../theme/theme";

// 👇 models
import { iMyTextInput } from "../models/myTextInput.model";

// 👇 utilities
import { common_text_input_props } from "../utilities/props.utility";

export default function MyTextInput({
  value,
  onChangeText,
  placeholder,
  style,
  contentStyle,
}: iMyTextInput) {
  // 👇 check if font loaded successfully
  const { caveat_fontLoaded } = useGlobalContext();

  return (
    <TextInput
      style={[style]}
      contentStyle={[
        contentStyle,
        caveat_fontLoaded && { fontFamily: "caveat" },
      ]}
      {...common_text_input_props}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

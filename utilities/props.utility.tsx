// 👇 theme
import { theme } from "../theme/theme";

export const common_icon_props = {
  size: theme.sizes.icon,
  color: theme.colors.primary,
};

export const common_text_input_props = {
  underlineColor: "transparent",
  underlineColorAndroid: "transparent",
  activeUnderlineColor: "transparent",
  activeOutlineColor: theme.colors.primary,
  cursorColor: theme.colors.primary,
  placeholderTextColor: theme.colors.primary,
  theme: theme,
};

interface sizesType {
  appPadding: number;
  icon: number;
  radius: number;
  title_fontSize: number;

  touchableOpacity_high?: number;
  touchableOpacity_medium?: number;
  touchableOpacity_low?: number;

  fontWeight_bold?:
    | "700"
    | "400"
    | "100"
    | "normal"
    | "bold"
    | "200"
    | "300"
    | "500"
    | "600"
    | "800"
    | "900"
    | undefined;
  fontWeight_medium?:
    | "700"
    | "400"
    | "100"
    | "normal"
    | "bold"
    | "200"
    | "300"
    | "500"
    | "600"
    | "800"
    | "900"
    | undefined;
  fontWeight_light:
    | "700"
    | "400"
    | "100"
    | "normal"
    | "bold"
    | "200"
    | "300"
    | "500"
    | "600"
    | "800"
    | "900"
    | undefined;
}

export const theme = {
  sizes: {
    appPadding: 10,
    icon: 25,
    radius: 5,
    title_fontSize: 20,

    touchableOpacity_high: 0.8,
    touchableOpacity_medium: 0.5,
    touchableOpacity_low: 0.2,

    fontWeight_bold: "700",
    fontWeight_medium: "400",
    fontWeight_light: "100",
  } as sizesType,
  colors: {
    primary: "orange",
    primary_faded: "rgba(255, 165, 0, 0.15)",
    primary_variableFade: (opacity: number) => `rgba(255, 165, 0, ${opacity})`,
    secondary: "",
    black: "#000",
    white: "#fff",
    darker_white: "#eee",
    fadedBlack: "rgba(0, 0, 0, 0.3)",
    black_variableFade: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    gray: "#808080",
    gray_variableFade: (opacity: number) => `rgba(80, 80, 80, ${opacity})`,
  },
  font: {
    caveat: "caveat",
    caveat_bold: "caveat_bold",
    caveat_medium: "caveat_medium",
    caveat_semiBold: "caveat_semiBold",
  },
};

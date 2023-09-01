export interface iFontWeight {
  fontWeight?: "bold" | "semi-bold" | "regular" | "medium";
}

export interface iMyText {
  children: any;
  style?: object | object[];
  fontWeight?: "bold" | "semi-bold" | "regular" | "medium";
  numberOfLines?: number;
}

export interface iMyTextItem {
  item: iMyText;
}

import React from "react";

export interface iMyTextInput {
  value?: string;
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  style?: object;
  contentStyle?: object;
}

export interface iMyTextInputProps {
  item: iMyTextInput;
}

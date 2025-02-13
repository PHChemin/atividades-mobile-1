import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { useTheme } from "../context/ThemeContext";

type ThemeButtonProps = {
  title?: string;
} & TouchableOpacityProps;

export default function ThemeModeButton({ title, ...props }: ThemeButtonProps) {
  const { globalStyles } = useTheme();

  return (
    <TouchableOpacity {...props} style={globalStyles.themeButton}>
      <Text style={globalStyles.text}>Trocar tema</Text>
    </TouchableOpacity>
  );
}

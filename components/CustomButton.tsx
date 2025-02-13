import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useTheme } from "../context/ThemeContext";

type CustomButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function CustomButton({ title, ...props }: CustomButtonProps) {
  const { globalStyles } = useTheme();

  return (
    <TouchableOpacity {...props} style={[globalStyles.button, props.style]}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

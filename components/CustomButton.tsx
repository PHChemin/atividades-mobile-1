import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

type CustomButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function CustomButton({ title, ...props }: CustomButtonProps) {
  return (
    <TouchableOpacity {...props} style={[globalStyles.button, props.style]}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

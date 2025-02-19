import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { theme } from "../../styles/theme";

type CustomButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function CustomButton({ title, ...props }: CustomButtonProps) {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.darkRed,
    borderRadius: theme.radius.md,
    width: "100%",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: theme.font.md,
  },
});

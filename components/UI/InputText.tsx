import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
  TextInputProps,
} from "react-native";
import React from "react";
import { theme } from "../../styles/theme";

type InputTextProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
} & TextInputProps;

export default function InputText({
  label,
  placeholder,
  value,
  onChangeText,
  ...props
}: InputTextProps) {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: theme.font.md,
  },
  input: {
    height: 42,
    padding: theme.spacing.sm,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    borderRadius: theme.radius.md,
    width: "100%",
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colors.forground,
    color: theme.colors.fontColor,
  },
});

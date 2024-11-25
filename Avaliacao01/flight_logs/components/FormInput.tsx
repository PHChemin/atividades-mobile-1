import {
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TextInput,
} from "react-native";
import React from "react";
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
} from "@/constants/globalSettings";

type FormInputProps = {
  label?: string;
  error?: string;
} & TextInputProps;

export default function FormInput({ label, error, ...rest }: FormInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={!error ? styles.input : styles.inputError} {...rest} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: DEFAULT_MARGIN,
    marginTop: DEFAULT_MARGIN,
  },
  label: {
    fontSize: 24,
    fontWeight: "medium",
  },
  error: {
    fontSize: 12,
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderRadius: DEFAULT_RADIUS,
    height: 48,
  },
  inputError: {
    borderWidth: 1,
    borderRadius: DEFAULT_RADIUS,
    height: 48,
    borderColor: "red",
  },
});

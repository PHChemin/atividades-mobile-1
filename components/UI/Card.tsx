import { View, Text, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { theme } from "../../styles/theme";

type CardProps = {
  children: React.ReactNode;
  customStyles?: ViewStyle;
};
export default function Card({ children, customStyles }: CardProps) {
  return <View style={[styles.container, customStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.forground,
    borderRadius: theme.spacing.md,
    padding: theme.spacing.md,
  },
});

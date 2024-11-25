import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
  SECONDARY_COLOR,
} from "@/constants/globalSettings";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8 * DEFAULT_RADIUS,
    backgroundColor: SECONDARY_COLOR,
    margin: DEFAULT_MARGIN,
    padding: 2 * DEFAULT_PADDING,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 6,
  },
});

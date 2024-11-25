import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { ReactNode } from "react";
import {
  CUSTOM_GREY,
  DEFAULT_GAP,
  DEFAULT_PADDING,
} from "@/constants/globalSettings";

type FullscreenProps = {
  children: ReactNode;
};

export default function Fullscreen({ children }: FullscreenProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_GREY,
    height: Dimensions.get("screen").height,
    padding: DEFAULT_PADDING,
    gap: DEFAULT_GAP / 2,
  },
});

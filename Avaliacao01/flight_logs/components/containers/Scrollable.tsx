import { View, Dimensions, StyleSheet, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import {
  CUSTOM_GREY,
  DEFAULT_GAP,
  DEFAULT_PADDING,
} from "@/constants/globalSettings";

type ScrollableProps = {
  children: ReactNode;
};

export default function Scrollable({ children }: ScrollableProps) {
  return (
    <ScrollView>
      <View>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_GREY,
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    padding: DEFAULT_PADDING,
    gap: DEFAULT_GAP / 2,
  },
});

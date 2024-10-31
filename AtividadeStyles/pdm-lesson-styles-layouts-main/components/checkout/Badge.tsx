import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { PRIMARY_COLOR } from "@/constants/globalStyles";

type BadgeProps = {
  title: string;
  icon?: ReactNode;
};

export default function Badge({ title, icon }: BadgeProps) {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 4,
    gap: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

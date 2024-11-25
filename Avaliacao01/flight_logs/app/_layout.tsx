import React from "react";
import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import Header from "@/components/headers/Header";
import { StyleSheet } from "react-native";

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen
          name="listagem"
          options={{
            header: () => <Header />,
          }}
        />
        <Stack.Screen
          name="sobre"
          options={{
            header: () => <Header />,
          }}
        />
      </Stack>
    </ActionSheetProvider>
  );
}

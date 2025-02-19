import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../styles/theme";

export default function LogoutButton() {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
      <Text style={styles.buttonText}>Sair</Text>
      <AntDesign name="logout" size={16} color={theme.colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 4,
    height: 32,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.primary,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

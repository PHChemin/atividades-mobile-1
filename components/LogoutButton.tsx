import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import useAuth from "../firebase/hooks/useAuth";
import { defaultTheme } from "../styles/defaultTheme";

export default function LogoutButton() {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={async () => {
        try {
          await logout();
          router.replace("/");
        } catch (error: any) {
          Alert.alert("Logout error", error.toString());
        }
      }}
    >
      <Text style={styles.buttonText}>Sair</Text>
      <AntDesign name="logout" size={16} color={defaultTheme.primaryColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 4,
    height: 32,
    padding: defaultTheme.padding / 2,
    borderRadius: defaultTheme.radius,
    borderWidth: 1,
    borderColor: defaultTheme.primaryColor,
    alignItems: "center",
  },
  buttonText: {
    color: defaultTheme.primaryColor,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

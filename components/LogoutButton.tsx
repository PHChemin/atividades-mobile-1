import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Alert,
} from "react-native";
import React from "react";
import { globalStyles, theme } from "../styles/globalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import useAuth from "../firebase/hooks/useAuth";
import { useRouter } from "expo-router";

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
      <AntDesign name="logout" size={16} color={theme.primaryColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 4,
    height: 32,
    padding: theme.defaultPadding / 2,
    borderRadius: theme.defaultRadius,
    borderWidth: 1,
    borderColor: theme.primaryColor,
    alignItems: "center",
  },
  buttonText: {
    color: theme.primaryColor,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

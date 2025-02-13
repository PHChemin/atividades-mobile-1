import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { defaultTheme } from "../styles/defaultTheme";
import Upgrade from "../types/Upgrade";

interface UpgradeCardProps {
  upgrade: Upgrade;
  onDelete: Function;
}

export default function UpgradeCard({ upgrade, onDelete }: UpgradeCardProps) {
  const { globalStyles } = useTheme();
  const router = useRouter();

  return (
    <View style={globalStyles.upgradeCard}>
      <View style={styles.flex}>
        <MaterialCommunityIcons
          name="car-turbocharger"
          size={48}
          style={globalStyles.icon}
        />
        <View>
          <Text style={globalStyles.text}>Nome: {upgrade.name} </Text>
          <Text style={globalStyles.text}>Preço: R${upgrade.price} </Text>
        </View>
      </View>
      <View style={styles.flex}>
        <TouchableOpacity
          onPress={() => {
            if (upgrade.id) {
              router.push(`/upgrades/${upgrade.id}/`);
            } else {
              Alert.alert(
                "View error",
                "cannot access upgrade details because it does not have an id!"
              );
            }
          }}
        >
          <Feather style={globalStyles.icon} name="edit" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (upgrade.id) {
              Alert.alert("Deletar Upgrade", "Você tem certeza?", [
                {
                  text: "Não",
                  style: "cancel",
                },
                {
                  text: "Sim",
                  onPress: async () => {
                    onDelete();
                  },
                },
              ]);
            } else {
              Alert.alert(
                "delete error",
                "cannot delete upgrade because it does not have an id!"
              );
            }
          }}
        >
          <AntDesign
            name="delete"
            size={24}
            color={defaultTheme.primaryColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderWidth: 1,
    borderColor: defaultTheme.darkRed,
    borderRadius: defaultTheme.radius,
    padding: defaultTheme.padding,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: defaultTheme.margin * 2,
  },
  flex: {
    flexDirection: "row",
    gap: 16,
  },
});

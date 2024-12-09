import { View, Text, Alert, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Upgrade from "../types/Upgrade";
import { useRouter } from "expo-router";
import CustomButton from "./CustomButton";
import { theme } from "../styles/globalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

interface UpgradeCardProps {
  upgrade: Upgrade;
  onDelete: Function;
}

export default function UpgradeCard({ upgrade, onDelete }: UpgradeCardProps) {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <View style={styles.flex}>
        <MaterialCommunityIcons
          name="car-turbocharger"
          size={48}
          color={theme.darkRed}
        />
        <View>
          <Text>Nome: {upgrade.name} </Text>
          <Text>Preço: R${upgrade.price} </Text>
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
                "cannot access book details because it does not have an id!"
              );
            }
          }}
        >
          <Feather name="edit" size={24} color="black" />
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
                "cannot delete book because it does not have an id!"
              );
            }
          }}
        >
          <AntDesign name="delete" size={24} color={theme.primaryColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderWidth: 1,
    borderColor: theme.darkRed,
    borderRadius: theme.defaultRadius,
    padding: theme.defaultPadding,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.defaultMargin * 2,
  },
  flex: {
    flexDirection: "row",
    gap: 16,
  },
});

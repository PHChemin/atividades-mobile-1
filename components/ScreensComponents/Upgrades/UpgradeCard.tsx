import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Upgrade from "../../../src/types/Upgrade";
import { theme } from "../../../styles/theme";
import Card from "../../UI/Card";

interface UpgradeCardProps {
  upgrade: Upgrade;
  onDelete: Function;
}

export default function UpgradeCard({ upgrade, onDelete }: UpgradeCardProps) {
  const router = useRouter();

  return (
    <>
      <Card>
        <View style={styles.flex}>
          <MaterialCommunityIcons
            name="car-turbocharger"
            size={48}
            color={theme.colors.fontColor}
          />
          <>
            <Text>Nome: {upgrade.name} </Text>
            <Text>Preço: R${upgrade.price} </Text>
          </>
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
            <Feather color={theme.colors.fontColor} name="edit" size={24} />
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
            <AntDesign name="delete" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing.xl,
  },
  flex: {
    flexDirection: "row",
    gap: 16,
  },
});

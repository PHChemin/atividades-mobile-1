import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Upgrade from "../../../src/types/Upgrade";
import { theme } from "../../../styles/theme";
import Card from "../../UI/Card";
import { Car } from "../../../src/types/Car";

import Ionicons from "@expo/vector-icons/Ionicons";
import api from "../../../src/services/api";
import { useTokenContext } from "../../../src/contexts/userContext";

interface CarCardProps {
  car: Car;
  showOptions?: boolean;
  userToken: string;
}

export default function CarCard({
  car,
  showOptions = false,
  userToken,
}: CarCardProps) {
  const router = useRouter();

  return (
    <>
      <Card customStyles={styles.card}>
        <View style={styles.flexBetween}>
          <View style={styles.flex}>
            <Ionicons name="car-sport" size={48} color={theme.colors.darkRed} />
            <View>
              <Text style={styles.carName}>
                {car.brand} {car.model}
              </Text>
              <Text>{car.hp} whp</Text>
            </View>
          </View>

          {showOptions && (
            <View style={styles.flex}>
              <TouchableOpacity
                testID="edit-icon"
                onPress={() => {
                  if (car.id) {
                    router.push(`/userspace/cars/${car.id}/edit_car`);
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
                testID="delete-icon"
                onPress={() => {
                  if (car.id) {
                    Alert.alert("Deletar Upgrade", "Você tem certeza?", [
                      {
                        text: "Não",
                        style: "cancel",
                      },
                      {
                        text: "Sim",
                        onPress: async () => {
                          api.delete(
                            `/api/collections/cars/records/${car.id}`,
                            {
                              headers: {
                                Authorization: userToken,
                                "content-type": "application/json",
                              },
                            }
                          );
                          router.replace("/userspace/");
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
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    marginBottom: theme.spacing.xl,
    borderWidth: 1,
    borderColor: theme.colors.darkRed,
  },
  flex: {
    flexDirection: "row",
    gap: 16,
  },
  flexBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carName: {
    fontWeight: "bold",
  },
});

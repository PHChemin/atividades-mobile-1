import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { CUSTOM_GREY, DEFAULT_PADDING } from "@/constants/globalSettings";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { usePathname, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Header() {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();
  const pathName = usePathname();

  const showMenu = () => {
    let options = [];
    let destructiveButtonIndex = 1;

    if (pathName == "/listagem") {
      options = ["Sobre", "Logout"];
    } else {
      options = ["Logout"];
      destructiveButtonIndex = 0;
    }

    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case destructiveButtonIndex:
            router.dismissAll();
            break;

          case 0:
            router.push("/sobre");
            break;
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Flight-Logs <FontAwesome name="plane" size={24} color="black" />
      </Text>
      <TouchableOpacity onPress={showMenu}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: DEFAULT_PADDING,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 4,
    backgroundColor: CUSTOM_GREY,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    padding: DEFAULT_PADDING,
    textShadowColor: "#ff8282",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

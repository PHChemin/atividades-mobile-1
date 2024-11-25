import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Scrollable from "@/components/containers/Scrollable";
import data from "@/assets/data/data-passengers";
import organizeList from "@/helpers/dataConversor";
import PassengerList from "@/components/containers/PassengerList";
import { CUSTOM_GREY, DEFAULT_MARGIN } from "@/constants/globalSettings";

export default function listagem() {
  return (
    <View>
      <Text style={styles.h2}>Lista de Passageiros</Text>
      <PassengerList list={organizeList(data)}></PassengerList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_GREY,
  },
  h2: {
    fontSize: 32,
    fontWeight: "black",
    textAlign: "center",
    marginTop: DEFAULT_MARGIN,
    marginBottom: DEFAULT_MARGIN,
  },
});

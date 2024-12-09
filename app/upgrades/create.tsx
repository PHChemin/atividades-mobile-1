import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { globalStyles, theme } from "../../styles/globalStyles";
import CustomButton from "../../components/CustomButton";
import useCollection from "../../firebase/hooks/useCollection";
import Upgrade from "../../types/Upgrade";

export default function _screen() {
  const router = useRouter();
  const [upName, setUpName] = useState("");
  const [price, setPrice] = useState("");
  const { create, refreshData } = useCollection<Upgrade>("upgrades");

  const handleSave = async () => {
    const convertedPrice = Number(price);

    if (upName.trim() === "") {
      Alert.alert("Erro", "Por favor, insira um nome válido!");
      return;
    }

    if (isNaN(convertedPrice) || convertedPrice < 0) {
      Alert.alert("Erro", "Por favor, insira um preço válido!");
      return;
    }

    try {
      await create({
        name: upName,
        price: convertedPrice,
      });

      router.replace("/upgrades/");
      await refreshData();
      Alert.alert("Upgrade criado com sucesso!");
    } catch (error: any) {
      Alert.alert("Create Book error", error.toString());
    }
  };

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: "Cadastrar upgrade",
        }}
      />
      <Text style={globalStyles.inputLabel}>Nome:</Text>
      <TextInput
        style={globalStyles.input}
        value={upName}
        onChangeText={setUpName}
      ></TextInput>
      <Text style={globalStyles.inputLabel}>Preço:</Text>
      <TextInput
        style={globalStyles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      ></TextInput>
      <CustomButton
        title="Salvar"
        onPress={handleSave}
        style={{ marginTop: theme.defaultMargin * 2 }}
      ></CustomButton>
    </View>
  );
}

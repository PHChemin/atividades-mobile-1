import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { useTheme } from "../../context/ThemeContext";
import useCollection from "../../firebase/hooks/useCollection";
import { defaultTheme } from "../../styles/defaultTheme";
import Upgrade from "../../types/Upgrade";

export default function _screen() {
  const { globalStyles } = useTheme();
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
          headerStyle: globalStyles.header,
          headerTitleStyle: globalStyles.headerTitle,
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
        style={{ marginTop: defaultTheme.margin * 2 }}
      ></CustomButton>
    </View>
  );
}

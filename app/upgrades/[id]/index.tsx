import { View, Text, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import useDocument from "../../../firebase/hooks/useDocument";
import Upgrade from "../../../types/Upgrade";
import Loading from "../../../components/Loading";
import { globalStyles } from "../../../styles/globalStyles";
import CustomButton from "../../../components/CustomButton";

export default function index() {
  const { id } = useGlobalSearchParams();
  const router = useRouter();

  const {
    data: upgrade,
    loading,
    upsert,
  } = useDocument<Upgrade>("upgrades", id as string);

  const [upName, setUpName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (upgrade) {
      setUpName(upgrade.name);
      setPrice(String(upgrade.price));
    }
  }, [upgrade]);

  if (loading || !upgrade) return <Loading />;

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
      await upsert({
        name: upName,
        price: convertedPrice,
      });

      router.replace("/upgrades/");
      Alert.alert("Upgrade editado com sucesso!");
    } catch (error: any) {
      Alert.alert("Create Book error", error.toString());
    }
  };

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: "Editar upgrade",
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
      <CustomButton title="Salvar" onPress={handleSave}></CustomButton>
    </View>
  );
}

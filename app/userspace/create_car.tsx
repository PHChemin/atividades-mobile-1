import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useTokenContext } from "../../src/contexts/userContext";
import api from "../../src/services/api";
import { Car } from "../../src/types/Car";
import HeaderWithTitle from "../../components/UI/headers/HeaderWithTitle";
import { theme } from "../../styles/theme";
import InputText from "../../components/UI/InputText";
import CustomButton from "../../components/UI/CustomButton";

export default function CreateCar() {
  const router = useRouter();
  const { token } = useTokenContext();

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [hp, setHp] = useState("");

  const handleCreate = async () => {
    const data = {
      model,
      brand,
      hp: parseInt(hp),
    };

    // na outra pagina fizemos com Promise.then, aqui com async/await
    const createdCar = await api.post<Car>(
      "/api/collections/cars/records",
      data,
      {
        headers: {
          Authorization: token,
          "content-type": "application/json",
        },
      }
    );

    if (createdCar.status === 200) {
      Alert.alert("Created!", createdCar.data.model);
      router.dismissAll();
      router.replace("/userspace");
    } else {
      console.log(createdCar);
      Alert.alert("Error!", "Error Creating Car!");
    }
  };

  return (
    <View style={styles.container}>
      <HeaderWithTitle title="Novo Carro" />

      <InputText
        label="Marca"
        placeholder="Digite a marca"
        value={brand}
        onChangeText={setBrand}
      />

      <InputText
        label="Modelo"
        placeholder="Digite o modelo"
        value={model}
        onChangeText={setModel}
      />

      <InputText
        label="Potência"
        placeholder="Digite a potência"
        value={hp}
        onChangeText={(text) => setHp(text.replace(/[^0-9]/g, ""))}
        keyboardType="number-pad"
      />

      <CustomButton title="Criar" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.xl,
  },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 16 },
});

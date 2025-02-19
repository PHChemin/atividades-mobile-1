import { useGlobalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useTokenContext } from "../../../../src/contexts/userContext";
import api from "../../../../src/services/api";
import { Car } from "../../../../src/types/Car";
import HeaderWithTitle from "../../../../components/UI/headers/HeaderWithTitle";
import { theme } from "../../../../styles/theme";
import InputText from "../../../../components/UI/InputText";
import CustomButton from "../../../../components/UI/CustomButton";

export default function EditCar() {
  const router = useRouter();
  const { token } = useTokenContext();
  const { id } = useGlobalSearchParams();

  useEffect(() => {
    api
      .get(`/api/collections/cars/records/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const car = response.data;
        setBrand(car.brand);
        setModel(car.model);
        setHp(car.hp.toString());
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }, []);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [hp, setHp] = useState("");

  const handleUpdate = async () => {
    const data = {
      model,
      brand,
      hp: parseInt(hp),
    };

    const createdCar = await api.patch<Car>(
      `/api/collections/cars/records/${id}`,
      data,
      {
        headers: {
          Authorization: token,
          "content-type": "application/json",
        },
      }
    );

    if (createdCar.status === 200) {
      Alert.alert("Editado!");
      router.replace("/userspace");
    } else {
      console.log(createdCar);
      Alert.alert("Error!", "Error updating Car!");
    }
  };

  return (
    <View style={styles.container}>
      <HeaderWithTitle title="Editar Carro" />

      <InputText label="Marca" value={brand} onChangeText={setBrand} />

      <InputText label="Modelo" value={model} onChangeText={setModel} />

      <InputText
        label="Potência"
        value={hp}
        onChangeText={(text) => setHp(text.replace(/[^0-9]/g, ""))}
        keyboardType="number-pad"
      />

      <CustomButton title="Salvar" onPress={handleUpdate} />
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

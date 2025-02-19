import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useTokenContext } from "../../src/contexts/userContext";
import api from "../../src/services/api";
import { Car } from "../../src/types/Car";
import HeaderWithTitle from "../../components/UI/headers/HeaderWithTitle";
import { theme } from "../../styles/theme";
import CarCard from "../../components/ScreensComponents/Cars/CarCard";
import HeaderHidden from "../../components/UI/headers/HeaderHidden";

export default function Home() {
  const { token } = useTokenContext();
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    api
      .get("/api/collections/cars/records", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setCars(response.data.items);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <HeaderWithTitle title="FuscaRed72" />

      <View style={styles.flex}>
        <Text style={styles.title}>Meus carros</Text>

        <Link href="/userspace/create_car">Novo carro</Link>
      </View>

      <FlatList
        data={cars}
        renderItem={({ item }) => {
          return <CarCard car={item} showOptions userToken={token} />;
        }}
        keyExtractor={(car) => car.id}
        style={styles.flatlist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.xl,
  },
  flatlist: {
    width: "100%",
    flex: 1,
  },
  title: {
    fontSize: theme.font.lg,
    fontWeight: "bold",
  },
  separator: {
    flexDirection: "column",
    marginBottom: theme.spacing.xl,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
});

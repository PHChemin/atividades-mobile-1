import { View, Text, Alert, StyleSheet, FlatList } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Stack, useRouter } from "expo-router";
import useAuth from "../../firebase/hooks/useAuth";
import LogoutButton from "../../components/LogoutButton";
import { globalStyles, theme } from "../../styles/globalStyles";
import Upgrade from "../../types/Upgrade";
import UpgradeCard from "../../components/UpgradeCard";
import useCollection from "../../firebase/hooks/useCollection";
import Loading from "../../components/Loading";

export default function _screen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const { data, create, remove, refreshData, loading } =
    useCollection<Upgrade>("upgrades");

  let upgrade1: Upgrade = {
    id: "1",
    name: "valvula",
    price: 600,
  };

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: "Fusca Red 72",
          headerRight: () => <LogoutButton />,
          headerBackVisible: false,
        }}
      />
      <View style={style.titleFlex}>
        <Text style={globalStyles.title}>Upgrades</Text>
        <CustomButton
          title="Adicionar"
          onPress={() => router.push("/upgrades/create")}
          style={{ width: "40%" }}
        ></CustomButton>
      </View>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <UpgradeCard
              upgrade={item}
              onDelete={async () => {
                await remove(item.id!);
                await refreshData();
              }}
            />
          )}
          style={{ width: "100%" }}
        />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  titleFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: theme.defaultMargin * 2,
  },
});

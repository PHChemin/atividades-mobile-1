import { Stack, useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import Loading from "../../components/Loading";
import LogoutButton from "../../components/LogoutButton";
import UpgradeCard from "../../components/UpgradeCard";
import { useTheme } from "../../context/ThemeContext";
import useAuth from "../../firebase/hooks/useAuth";
import useCollection from "../../firebase/hooks/useCollection";
import { defaultTheme } from "../../styles/defaultTheme";
import Upgrade from "../../types/Upgrade";
import ThemeModeButton from "../../components/ThemeModeButton";

export default function _screen() {
  const { globalStyles } = useTheme();
  const router = useRouter();
  const { user, logout } = useAuth();

  const { data, create, remove, refreshData, loading } =
    useCollection<Upgrade>("upgrades");
  const theme = useTheme();

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: "Fusca Red 72",
          headerStyle: globalStyles.header,
          headerTitleStyle: globalStyles.headerTitle,
          headerRight: () => (
            <>
              <ThemeModeButton onPress={theme.toggle} />
              <LogoutButton />
            </>
          ),
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
    marginBottom: defaultTheme.margin * 2,
  },
});

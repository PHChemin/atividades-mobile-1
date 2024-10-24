import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  const handleNavigate = () => {
    const id = Math.random();
    router.push({
      pathname: "/post/[id]",
      params: { id },
    });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Navegação" }} />
      <Text style={styles.h1}>Opções</Text>
      <Link href={"/profile"}>Perfil</Link>
      <Link href={{ pathname: "/post/[id]", params: { id: 1 } }}>Post 01</Link>
      <Link href={{ pathname: "/post/[id]", params: { id: 2 } }}>Post 02</Link>
      <Link href={{ pathname: "/post/[id]", params: { id: 3 } }}>Post 03</Link>
      <Button title="Perfil" onPress={handleNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  h1: {
    fontSize: 20,
    marginBottom: 5,
  },
  p: {
    fontSize: 16,
    marginBottom: 3,
    color: "blue",
  },
});

import { View, Text, Image, TextInput, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles, theme } from "../styles/globalStyles";
import CustomButton from "../components/CustomButton";
import useAuth from "../firebase/hooks/useAuth";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";

export default function _screen() {
  const { user, login, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.replace("/upgrades/");
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <Text style={styles.helper}>EMAIL: user@example.com SENHA: 123456</Text>
      <View style={styles.form}>
        <Text style={globalStyles.inputLabel}>Email:</Text>
        <TextInput
          style={globalStyles.input}
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <Text style={globalStyles.inputLabel}>Senha:</Text>
        <TextInput
          style={globalStyles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        ></TextInput>
        <CustomButton
          title="Entrar"
          onPress={async () => {
            try {
              await login(email, password);
              router.push("/upgrades/");
            } catch (error: any) {
              Alert.alert("Login error", error.toString());
            }
          }}
          style={{ marginTop: theme.defaultMargin * 2 }}
        ></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  form: {
    flex: 1,
    width: "100%",
  },
  helper: {
    backgroundColor: theme.secondaryColor,
    borderRadius: theme.defaultRadius,
    padding: theme.defaultPadding / 2,
    color: theme.darkRed,
    marginBottom: theme.defaultMargin,
  },
});

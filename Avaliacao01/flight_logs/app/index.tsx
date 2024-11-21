import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { DEFAULT_MARGIN, PRIMARY_COLOR } from "@/constants/globalSettings";
import FormInput from "@/components/FormInput";
import ImageButton from "@/components/ImageButton";
import { router } from "expo-router";
import Constants from "expo-constants";

export default function index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  console.log(username);

  function handleLogin() {
    console.log("Clicou");
    setErrorUsername("");
    setErrorPassword("");

    let isAutenticated: boolean = true;

    if (username !== "fulano") {
      setErrorUsername("Usuário incorreto!");
      isAutenticated = false;
      console.log("Usuário errado");
    }

    if (password !== "123") {
      setErrorPassword("Senha incorreta!");
      isAutenticated = false;
    }

    if (isAutenticated) router.push("/");
  }

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.image}
        />
        <View style={styles.form}>
          <Text style={styles.h1}>Login</Text>
          <FormInput
            value={username}
            label="Usuário"
            error={errorUsername}
            onChangeText={setUsername}
          ></FormInput>
          <FormInput
            value={password}
            label="Senha"
            error={errorPassword}
            onChangeText={setPassword}
            secureTextEntry
          ></FormInput>
          <ImageButton
            source={require("../assets/images/img-button.png")}
            onPress={handleLogin}
          ></ImageButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    marginLeft: DEFAULT_MARGIN,
    marginRight: DEFAULT_MARGIN,
  },
  image: {
    width: "100%",
    height: "30%",
  },
  form: {
    width: "100%",
    height: "60%",
    borderWidth: 2,
    borderColor: "black",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: "center",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 4 * DEFAULT_MARGIN,
    textAlign: "center",
  },
});

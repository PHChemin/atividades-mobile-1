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
import {
  DEFAULT_MARGIN,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "@/constants/globalSettings";
import FormInput from "@/components/FormInput";
import ImageButton from "@/components/ImageButton";
import { router } from "expo-router";
import Constants from "expo-constants";
import Fullscreen from "@/components/containers/Fullscreen";
import HeaderHidden from "@/components/headers/HeaderHidden";

export default function index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  function handleLogin() {
    setErrorUsername("");
    setErrorPassword("");

    let isAutenticated: boolean = true;

    if (username !== "fulano") {
      setErrorUsername("Usuário incorreto!");
      isAutenticated = false;
    }

    if (password !== "123") {
      setErrorPassword("Senha incorreta!");
      isAutenticated = false;
    }

    if (isAutenticated) router.push("/listagem");
  }

  return (
    <KeyboardAvoidingView>
      <Fullscreen>
        <HeaderHidden></HeaderHidden>
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
            height={100}
            width={200}
            onPress={handleLogin}
          ></ImageButton>
        </View>
      </Fullscreen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 4 * DEFAULT_MARGIN,
    textAlign: "center",
  },
});

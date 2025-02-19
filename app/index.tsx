import { Redirect } from "expo-router";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useTokenContext } from "../src/contexts/userContext";
import api from "../src/services/api";
import CustomButton from "../components/UI/CustomButton";
import { theme } from "../styles/theme";
import InputText from "../components/UI/InputText";
import { useState } from "react";
import HeaderHidden from "../components/UI/headers/HeaderHidden";

export default function Login() {
  const { token, setToken } = useTokenContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (token) return <Redirect href="/userspace" />;

  return (
    <View style={styles.container}>
      <HeaderHidden />

      <Image source={require("../assets/images/logo.png")} />

      <Text style={styles.helper}>
        EMAIL: gearhead@example.com SENHA: password123
      </Text>

      <View style={styles.form}>
        <InputText
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          label="Senha"
          placeholder="Sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CustomButton
          title="Entrar"
          onPress={async () => {
            try {
              const result = await api.post(
                "/api/collections/users/auth-with-password",
                {
                  identity: email,
                  password: password,
                }
              );

              setToken(result.data.token);
            } catch (error) {
              Alert.alert(error.message);
            }
          }}
          style={{ marginTop: theme.spacing.xl }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: theme.colors.background,
  },
  form: {
    flex: 1,
    width: "100%",
  },
  helper: {
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    color: theme.colors.darkRed,
    marginBottom: theme.spacing.md,
  },
});

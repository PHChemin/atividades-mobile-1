import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        console.log("Usuário:", username, "Senha:", password)
    };


  return (
    <View>
      <Text>Login</Text>
      <TextInput style={styles.input} autoFocus value={username} onChangeText={setUsername}></TextInput>
      <TextInput style={styles.input} secureTextEntry value={password} onChangeText={setPassword}></TextInput>
      <Button title="Enviar" onPress={onSubmit}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginTop: 7,
        borderRadius: 5,
    }
});
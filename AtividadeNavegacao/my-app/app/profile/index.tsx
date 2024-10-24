import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function profile() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Perfil'}}/>
      <Text style={styles.h1}>Seu Perfil</Text>
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
        color: 'blue',
    }
  });
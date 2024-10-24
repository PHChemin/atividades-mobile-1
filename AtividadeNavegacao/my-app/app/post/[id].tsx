import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useGlobalSearchParams } from 'expo-router'

export default function _Screen() {

    const param = useGlobalSearchParams()

  return (
    <View>
      <Stack.Screen options={{title: `Post ${param.id}`}}/>
      <Text style={styles.h1}>Este é seu post de número: {param.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        marginLeft: 20,
    }
})
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { DEFAULT_PADDING, DEFAULT_RADIUS } from "@/constants/globalStyles";

export default function CountButton() {
  const [counter, setCounter] = useState(0);
  if (counter < 0) {
    setCounter(0);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setCounter(counter - 1);
        }}
        style={styles.counterButtom}
      >
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterNumber}>{counter}</Text>
      <TouchableOpacity
        onPress={() => {
          setCounter(counter + 1);
        }}
        style={styles.counterButtom}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 8,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  counterNumber: {
    borderLeftWidth: 1,
    borderColor: "lightgrey",
    borderRightWidth: 1,
    paddingLeft: DEFAULT_PADDING / 2,
    paddingRight: DEFAULT_PADDING / 2,
    textAlign: "center",
    fontWeight: "bold",
  },
  counterButtom: {
    width: "33%",
    height: "100%",
    alignItems: "center",
  },
});

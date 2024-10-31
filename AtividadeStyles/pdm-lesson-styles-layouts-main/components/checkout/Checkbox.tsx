import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity onPress={() => setChecked(!checked)}>
      <FontAwesome5
        name="check-square"
        size={24}
        color={checked ? "orange" : "lightgrey"}
      />
    </TouchableOpacity>
  );
}

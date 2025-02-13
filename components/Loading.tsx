import { ActivityIndicator, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function Loading() {
  const { globalStyles } = useTheme();
  return (
    <View style={globalStyles.container}>
      <ActivityIndicator />
      <Text>Carregando</Text>
    </View>
  );
}

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>Carregando</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
});

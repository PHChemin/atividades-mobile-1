import { Stack } from "expo-router";
import ThemeContextProvider from "../context/ThemeContext";

export default function DefaultLayout() {
  return (
    <ThemeContextProvider>
      <Stack />
    </ThemeContextProvider>
  );
}

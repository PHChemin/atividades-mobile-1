import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { DEFAULT_MARGIN } from "@/constants/globalSettings";

type ImageButtonProps = {
  source: any;
} & TouchableOpacityProps;

export default function ImageButton({ source, ...rest }: ImageButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={{ height: 100, width: 200 }} source={source} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2 * DEFAULT_MARGIN,
  },
});

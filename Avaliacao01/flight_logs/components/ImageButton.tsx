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
  height: number;
  width: number;
  resize?: boolean;
} & TouchableOpacityProps;

export default function ImageButton({
  source,
  height,
  width,
  resize,
  ...rest
}: ImageButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {!resize ? (
        <Image style={{ height: height, width: width }} source={source} />
      ) : (
        <Image
          style={{ height: height, width: width }}
          source={source}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2 * DEFAULT_MARGIN,
  },
});

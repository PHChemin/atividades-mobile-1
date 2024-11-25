import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React from "react";
import { DEFAULT_MARGIN, DEFAULT_PADDING } from "@/constants/globalSettings";
import Fullscreen from "@/components/containers/Fullscreen";
import ImageButton from "@/components/ImageButton";

export default function sobre() {
  const gitPress = () => {
    Linking.openURL("https://github.com/PHChemin");
  };

  const ytPress = () => {
    Linking.openURL("https://www.youtube.com/@phchemin");
  };

  return (
    <Fullscreen>
      <Text style={styles.h2}>Sobre</Text>
      <View style={styles.container}>
        <View>
          <Text style={styles.h3}>Versão 1.0</Text>
          <Text style={styles.h3}>Desenvolvido por Pedro H. Chemin Prado</Text>
          <ImageButton
            source={{
              uri: "https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png",
            }}
            width={80}
            height={30}
            resize={true}
            onPress={gitPress}
          />
          <ImageButton
            source={{
              uri: "https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png",
            }}
            width={120}
            height={40}
            resize={true}
            onPress={ytPress}
          />
        </View>

        <Image
          source={require("../assets/images/logo.png")}
          style={styles.image}
        />
      </View>
    </Fullscreen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "75%",
    borderWidth: 2,
    borderColor: "black",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    padding: 2 * DEFAULT_PADDING,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flex: {},
  h2: {
    marginTop: 2 * DEFAULT_MARGIN,
    fontSize: 32,
    fontWeight: "medium",
    textAlign: "center",
  },
  h3: {
    fontSize: 16,
    marginTop: DEFAULT_MARGIN,
  },
  image: {
    width: "100%",
    height: "50%",
  },
  touch: {
    marginTop: DEFAULT_MARGIN,
  },
});

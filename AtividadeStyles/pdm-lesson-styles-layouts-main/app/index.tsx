import CheckoutButton from "@/components/checkout/CheckoutButton";
import PriceTag from "@/components/checkout/PriceTag";
import Card from "@/components/containers/Card";
import Scrollable from "@/components/containers/Scrollable";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Checkbox from "@/components/checkout/Checkbox";
import FullScreen from "@/components/containers/FullScreen";
import Entypo from "@expo/vector-icons/Entypo";
import { DEFAULT_GAP } from "@/constants/globalStyles";

/**
 * index: carrinho produtos
 * checkout: total, meio de pagamento
 * compra concluída
 */

export default function index() {
  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <FullScreen>
      <HeaderWithTitle title="Carrinho (4)" />
      <ScrollView>
        <View style={styles.card}>
          <Card
            title="Mouse sem fio 2.4Ghz"
            price={50}
            icon={<Entypo name="video-camera" size={16} color="white" />}
            productOption="Wireless"
          ></Card>

          <Card title="Teclado Mancer Shade" price={59.99}></Card>

          <Card title="Mouse sem fio 2.4Ghz" price={199.9}></Card>

          <Card title="Teclado Mancer Shade" price={250}></Card>
        </View>
      </ScrollView>
      <CheckoutButton onPress={handleCheckout} />
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: DEFAULT_GAP,
  },
});

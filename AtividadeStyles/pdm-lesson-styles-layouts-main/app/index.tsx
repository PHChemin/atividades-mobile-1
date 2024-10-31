import CheckoutButton from "@/components/checkout/CheckoutButton";
import PriceTag from "@/components/checkout/PriceTag";
import Card from "@/components/containers/Card";
import Scrollable from "@/components/containers/Scrollable";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Checkbox from "@/components/checkout/Checkbox";
import FullScreen from "@/components/containers/FullScreen";
import Entypo from "@expo/vector-icons/Entypo";

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
        <Card
          title="Mouse sem fio 2.4Ghz"
          price={50}
          icon={<Entypo name="video-camera" size={16} color="white" />}
        >
          <Text>
            O mouse TGT Vector E1 é o equip perfeito para você que está
            iniciando sua jornada gamer e deseja aumentar a precisão de seu
            setup! Desenvolvido para ter o ótimo desempenho em todos os tipos de
            jogos, este mouse é sua nova arma de combate!
          </Text>
        </Card>

        <Card title="Teclado Mancer Shade" price={59.99}>
          <Text>
            O teclado Mancer Shade MK2 é o item indispensável para sua próxima
            batalha! Ele possui formato TKL em padrão ABNT2 (padrão brasileiro).
            Foi desenvolvido com tudo que um gamer precisa, ele te levará para o
            próximo nível!
          </Text>
        </Card>

        <Card title="Mouse sem fio 2.4Ghz" price={199.9}>
          <Text>
            O mouse TGT Vector E1 é o equip perfeito para você que está
            iniciando sua jornada gamer e deseja aumentar a precisão de seu
            setup! Desenvolvido para ter o ótimo desempenho em todos os tipos de
            jogos, este mouse é sua nova arma de combate!
          </Text>
        </Card>

        <Card title="Teclado Mancer Shade" price={250}>
          <Text>
            O teclado Mancer Shade MK2 é o item indispensável para sua próxima
            batalha! Ele possui formato TKL em padrão ABNT2 (padrão brasileiro).
            Foi desenvolvido com tudo que um gamer precisa, ele te levará para o
            próximo nível!
          </Text>
        </Card>
      </ScrollView>
      <CheckoutButton onPress={handleCheckout} />
    </FullScreen>
  );
}

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
  PRIMARY_COLOR,
} from "@/constants/globalStyles";
import Checkbox from "../checkout/Checkbox";
import PriceTag from "../checkout/PriceTag";
import Badge from "../checkout/Badge";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import CountButton from "../checkout/CountButton";

type CardProps = {
  title: string;
  productOption?: string;
  price: number;
  icon?: ReactNode;
};

export default function Card({ title, productOption, price, icon }: CardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Checkbox></Checkbox>

        <Badge title="Indicado"></Badge>
        <View style={styles.spaceItemsNav}>
          <View style={styles.itemNav}>
            <Text style={styles.title}>Choice Oficial</Text>
            <Badge title="Live" icon={icon}></Badge>
            <Feather name="arrow-right" size={20} color="black" />
          </View>

          <Text>Editar</Text>
        </View>
      </View>

      <View style={styles.flexRow}>
        <Checkbox></Checkbox>
        <Image
          style={styles.image}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qbVwyaHt66GKMDfgWeNqDGw_IS7pjjWL0Q&s",
          }}
          width={100}
          height={100}
        />

        <View style={styles.productDescription}>
          <Text style={styles.productTitle}>{title}</Text>
          {productOption && (
            <View style={styles.containerOptions}>
              <Text>{productOption}</Text>
              <Feather name="arrow-right" size={16} color="black" />
            </View>
          )}

          <View style={styles.flexBetween}>
            <PriceTag price={price}></PriceTag>
            <CountButton></CountButton>
          </View>
        </View>
      </View>

      <View style={styles.flexRow}>
        <MaterialCommunityIcons
          name="ticket-percent-outline"
          size={16}
          color={PRIMARY_COLOR}
        />
        <View style={styles.spaceItemsNav}>
          <Text>Ver todos os cupons da loja</Text>
          <View style={styles.itemFooter}>
            <Badge title="Novo"></Badge>
            <Feather name="arrow-right" size={16} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.flexRow}>
        <Feather name="truck" size={16} color="lightblue" />
        <View style={styles.spaceItemsNav}>
          <Text>
            Frete grátis em fretes até R$20,00 para pedidos acima de R$19,00
          </Text>
          <Feather name="arrow-right" size={16} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: DEFAULT_RADIUS,
    gap: DEFAULT_GAP,
    padding: DEFAULT_PADDING,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  productTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  flexBetween: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: DEFAULT_RADIUS / 2,
  },
  productDescription: {
    flex: 1,
  },
  nav: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
  },
  itemNav: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  spaceItemsNav: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  itemFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerOptions: {
    maxWidth: 100,
    padding: DEFAULT_PADDING / 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "lightgrey",
    borderRadius: DEFAULT_RADIUS / 2,
  },
});

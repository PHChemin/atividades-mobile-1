import {
  View,
  Text,
  SectionList,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import organizeList from "@/helpers/dataConversor";
import data from "@/assets/data/data-passengers";
import Card from "./Card";
import {
  DEFAULT_GAP,
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
} from "@/constants/globalSettings";
import { DEFAULT_EXTENSIONS } from "@babel/core";

type PassengerListProps = {
  list: any[];
};

export default function PassengerList({ list }: PassengerListProps) {
  return (
    <View style={styles.container}>
      <SectionList
        sections={list}
        renderItem={({ item }) => (
          <Card>
            <View style={styles.flexItems}>
              <Image
                source={{ uri: item.passenger_avatar }}
                style={styles.img}
              />
              <View>
                <Text style={styles.h3}>{item.passenger_name}</Text>
                <Text>Origem: {item.origin}</Text>
                <Text>Destino: {item.destination}</Text>
              </View>
            </View>
          </Card>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>
            {section.title} - {section.data.length}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: DEFAULT_PADDING,
    paddingRight: DEFAULT_PADDING,
  },
  sectionTitle: {
    marginTop: 2 * DEFAULT_MARGIN,
    marginLeft: 2 * DEFAULT_MARGIN,
    fontSize: 24,
    fontWeight: "bold",
  },
  flexItems: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3 * DEFAULT_GAP,
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6 * DEFAULT_RADIUS,
    backgroundColor: "white",
  },
  h3: {
    fontSize: 24,
    fontWeight: "medium",
  },
});

import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { products } from "../../../data/products.data";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id);
  return (
    <View>
      <Text>ProductDetail {id}</Text>
      <Text>{JSON.stringify(product)}</Text>
    </View>
  );
}

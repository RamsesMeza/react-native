import { products } from "@/data/products.data";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function ProductsIndex() {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ marginBottom: 10 }}></View>
        )}
        renderItem={({ item }) => (
          <View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text>{item.id}</Text>
              <Text style={{ fontWeight: "800" }}>{item.title}</Text>
            </View>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Link href={`/(stack)/products/${item.id}`}> Ver mas</Link>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products</Text>
      <Link href="./1" relativeToDirectory>
        <Text style={styles.text}>Product 1</Text>
      </Link>
      <Link href="/products/2">
        <Text style={styles.text}>Product 2</Text>
      </Link>
      <Link href="/products/3">
        <Text style={styles.text}>Product 3</Text>
      </Link>
      <Link href="/products/best-sellers/playstation-5">
        <Text style={styles.text}>PlayStation 5 Best Sellers</Text>
      </Link>
      <Link href="/products/deals/black-friday/playstation-5">
        <Text style={styles.text}> PlayStation 5 Deals</Text>
      </Link>
      <Link href="/products/search/playstation-5">
        <Text style={styles.text}>PlayStation 5 Search</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});

import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CatchAllProductDetail() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Catch all product details</Text>
      <Text style={styles.text}>
        Details about product at {rest.join("/ ")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});

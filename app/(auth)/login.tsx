import { Link, router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Link href="./register">
        <Text style={styles.text}>Register</Text>
        <Button
          title="Sing in"
          onPress={() => {
            router.replace("/profile");
          }}
        />
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

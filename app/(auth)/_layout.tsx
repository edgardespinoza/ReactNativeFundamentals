import { Slot } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={styles.logo}
      />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 20,
  },
});

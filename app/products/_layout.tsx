import { Slot } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function ProductLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Slot />
      <View style={styles.discountedProducts}>
        <Text>Discount Products</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },

  discountedProducts: {
    backgroundColor: "#653454",
    padding: 10,
    with: "100%",
  },
};

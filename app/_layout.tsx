import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My expo app</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "#9432f1",
    padding: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
  },
  footer: {
    backgroundColor: "#9432f0",
    padding: 10,
  },
  footerText: {
    color: "#fff",
    fontSize: 20,
  },
});

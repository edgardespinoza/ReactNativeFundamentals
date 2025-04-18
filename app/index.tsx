import { Link, Redirect } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const isLogin = false;

  if (!isLogin) {
    return <Redirect href="/login" />;
  }
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Link href="/about">
        <Text style={styles.text}>About</Text>
      </Link>
      <Link href="/profile">
        <Text style={styles.text}>Profile</Text>
      </Link>
      <Link href="/products">
        <Text style={styles.text}>Products</Text>
      </Link>
      <Link href="/login">
        <Text style={styles.text}>Login</Text>
      </Link>

      <Link href="/products/best-sellers/playstation-5" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Playstation</Text>
        </Pressable>
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
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

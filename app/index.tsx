import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ShopIndex() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop Home</Text>

      {/* Declarative in-app link (expo-router Link) */}
      <Link href="/(authenticated)/(apps)/shop/tabs/tab1/tab" style={styles.link}>
        Open product 42 (Link)
      </Link>

      {/* Programmatic navigation */}
      <Button
        title="Go to product 42 (router.push)"
        onPress={() => router.push("/(authenticated)/(apps)/shop/tabs/tab2/tab")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 12 },
  link: { color: "#007AFF", marginBottom: 12 },
});
import { Link, useRouter } from "expo-router";
import React from "react";
import { useTranslation } from 'react-i18next';
import { Button, StyleSheet, Text, View } from "react-native";

export default function ShopIndex() {
  const router = useRouter();
    const { t, i18n } = useTranslation();

  return (
    <View style={styles.container} className="bg-background">
      <Text style={styles.title} className="text-txt">Shop Home</Text>

      <Text className="text-txt">{t('welcome')}</Text>
      <Button title="Español" onPress={() => i18n.changeLanguage('es')} />
      <Button title="English" onPress={() => i18n.changeLanguage('en')} />

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
import { Text as Rnu_Txt } from "@/components/ui/text";
import { increment } from '@/sm/counterSlice';
import type { RootState } from '@/sm/store';
import { Link, useRouter } from "expo-router";
import React from "react";
import { useTranslation } from 'react-i18next';
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

export default function ShopIndex() {
  const router = useRouter();
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.value);

  return (
    <View style={styles.container} className="bg-background">
      <Text style={styles.title} className="text-txt">Shop Home</Text>

      <Text className="text-foreground">{t('welcome')}</Text>
      <Button title="हिंदी" onPress={() => i18n.changeLanguage('hi')} />
      <Button title="English" onPress={() => i18n.changeLanguage('en')} />

      <Rnu_Txt className="text-txt" variant={"blockquote"}>This is a custom text component.</Rnu_Txt>

     {/* const dispatch = useDispatch(); */}
     <Button title="Increment" onPress={() => dispatch(increment())} />
     <Text>{count}</Text>

      {/* Declarative in-app link (expo-router Link) */}
      <Link href="/(authenticated)/(apps)/shop/tabs/tab1/tab" style={styles.link}>
        Open product 42 (Link)
      </Link>

      {/* Programmatic navigation */}
      <Button
        title="Go (authenticated)/(apps)/shop/tabs/tab2/tab"
        onPress={() => router.push("/(authenticated)/(apps)/shop/tabs/tab2/tab")}
      />

            <Button
        title="Go /"
        onPress={() => router.push("/")}
      />
            <Button
        title="Go login"
        onPress={() => router.push("/login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 12 },
  link: { color: "#007AFF", marginBottom: 12 },
});
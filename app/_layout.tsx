

import "@/global.css";
import { useColorScheme } from '@/hooks/use-color-scheme';
import '@/lib/localization/i18'; // Import the i18n configuration
import { store } from '@/sm/store';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { useAuthContext } from '@/hooks/use-auth-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

function RootNavigator() {
  const { isLoggedIn } = useAuthContext()
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>

      <RootNavigator />
      <StatusBar style="auto" />
      <PortalHost />
      </Provider>
    </ThemeProvider>
  );
}

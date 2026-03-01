

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
import AuthProvider from "@/providers/auth-provider";

export const unstable_settings = {
  anchor: '(tabss)',
};

function RootNavigator() {
  const { isLoggedIn, isLoading } = useAuthContext()
  if (isLoading) {
    // You can render a loading screen here if you want
    return null
  }
  return (
    <Stack>
      {/* protected routes use guard component to check auth state */}
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabss)" options={{ headerShown: false }} />
      </Stack.Protected>

      {/* public routes */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

    </Stack>
  )
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>

      <RootNavigator />
      <StatusBar style="auto" />
      <PortalHost />
      </Provider>
    </ThemeProvider>
    </AuthProvider>
  );
}

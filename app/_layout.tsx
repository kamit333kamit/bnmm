

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

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
      <Stack>
      </Stack>
      <StatusBar style="auto" />
      <PortalHost />
      </Provider>
    </ThemeProvider>
  );
}

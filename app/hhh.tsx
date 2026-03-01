import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuthContext } from '@/hooks/use-auth-context';
import { useEffect } from 'react';

export default function LoginScreen() {
  // useAuthContext()
  const { isLoggedIn, isLoading } = useAuthContext()
  useEffect(() => {
    // console.debug('LoginScreen - useEffect - start');
    if( isLoggedIn === true) {
      console.debug('LoginScreen - useEffect - isLoggedIn is true, navigating to home screen');
      // You can use the router from expo-router to navigate programmatically
      // router.push('/(tabss)');
    } else {
      console.debug('LoginScreen - useEffect - isLoggedIn is false, staying on login screen');
    } 
    return () => {
      // console.debug('LoginScreen - useEffect - cleanup');
    }
  }, [])
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Login</ThemedText>
        <Link href="/(tabss)" style={styles.link}>

          <ThemedText type="link">hhhhhhh</ThemedText>
        </Link>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
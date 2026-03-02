import { useAuthContext } from '@/hooks/use-auth-context';
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import React from 'react';
import { Button } from 'react-native';



export default function SignOutButton() {
  const { setClaims, setIsLoggedIn, setIsLoading } = useAuthContext();

  async function onSignOutButtonPress( setclaims: any, setIsLoggedIn: any, setIsLoading: any   ) {
  console.log('Signing outttt')
  const { error } = await supabase.auth.signOut()
  // setclaims(null);
  // setIsLoggedIn(false);
  setIsLoading(false);
  // router.replace('/');
  router.push('/');

  if (error) {
    console.error('Error signing out:', error)
  }
}
  // setClaims(null);
  // setIsLoggedIn(false); 
  return <Button title="Sign bbbbbbbbout" onPress={() => onSignOutButtonPress(setClaims, setIsLoggedIn, setIsLoading)} />
}
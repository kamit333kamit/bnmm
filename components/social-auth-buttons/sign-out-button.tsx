import { useAuthContext } from '@/hooks/use-auth-context'
import { supabase } from '@/lib/supabase'
import React from 'react'
import { Button } from 'react-native'



export default function SignOutButton() {
  const { setClaims, setIsLoggedIn } = useAuthContext();

  async function onSignOutButtonPress( setclaims: any, setIsLoggedIn: any ) {
  console.log('Signing outttt')
  const { error } = await supabase.auth.signOut()
  // setclaims(null);
  // setIsLoggedIn(false);
  // router.replace('/');

  if (error) {
    console.error('Error signing out:', error)
  }
}
  // setClaims(null);
  // setIsLoggedIn(false); 
  return <Button title="Sign bbbbbbbbout" onPress={() => onSignOutButtonPress(setClaims, setIsLoggedIn)} />
}
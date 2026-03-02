import { useAuthContext } from '@/hooks/use-auth-context'
import { Redirect } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import { useEffect } from 'react'

export default function GoogleAuthCallback() {
  const { isLoading, setIsLoading } = useAuthContext() // Ensure auth context is initialized
  useEffect(() => {
    // Signal Expo's WebBrowser that the auth session may be complete.
    // This is required on Android to close the browser tab and return control.
    WebBrowser.maybeCompleteAuthSession()
    console.log('google-auth: maybeCompleteAuthSession called')
    setIsLoading?.(false)
    
  }, [])

  // if(isLoading){
  //   return <div>Loading..ghghghghghghghghghghghghghghghghghghghghghghghghghghghghgjgjfghfgjghjhgjhkhjkhkhjgujtgyuffrtdunftuynfty.</div>
  // }
  // if(!isLoading){
  //   console.log('google-auth: auth context loaded, redirecting...')
  //   return <Redirect href="/(tabss)" />
  // }

    return <Redirect href="/(tabss)" />

  // Redirect back into the app (adjust target route as desired)
}

import { Redirect } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import { useEffect } from 'react'

export default function GoogleAuthCallback() {
  useEffect(() => {
    // Signal Expo's WebBrowser that the auth session may be complete.
    // This is required on Android to close the browser tab and return control.
    WebBrowser.maybeCompleteAuthSession()
    console.log('google-auth: maybeCompleteAuthSession called')
  }, [])

  // Redirect back into the app (adjust target route as desired)
  return <Redirect href="/(tabss)" />
}

import { createContext, useContext } from 'react'

export type AuthData = {
  claims?: Record<string, any> | null
  profile?: any | null
  isLoading: boolean
  isLoggedIn: boolean
  setProfile: (profile: any | null) => void
  setClaims: (claims: Record<string, any> | null) => void
  setIsLoggedIn: (isLoggedIn: boolean) => void
  setIsLoading?: (isLoading: boolean) => void
  
}


export const AuthContext = createContext<AuthData>({
  claims: undefined,
  profile: undefined,
  isLoading: true,
  isLoggedIn: false,
  setProfile: () => {},
  setClaims: () => {},
  setIsLoggedIn: () => {},
  setIsLoading: () => {},
})

export const useAuthContext = () => useContext(AuthContext)
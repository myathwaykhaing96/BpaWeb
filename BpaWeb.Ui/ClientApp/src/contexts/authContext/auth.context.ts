import React, { createContext, useContext } from 'react'
import { AuthProps } from 'MyModels'

type Props = {
  auth: AuthProps | null
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>
  getAuth: (signToken: string, redirectUrl?: string) => Promise<void>
}

export const AuthContext = createContext<Props>({} as Props)

export const useAuth = () => {
  const { auth, setAuth, getAuth } = useContext(AuthContext)
  return { auth, setAuth, getAuth }
}

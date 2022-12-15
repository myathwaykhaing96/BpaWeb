import React, { createContext, useContext } from 'react'

type Props = {
  sessionKey: string | null
  // setSessionKey: React.Dispatch<React.SetStateAction<string>>
}

export const SessionKeyContext = createContext<Props>({} as Props)

export const useSessionKey = () => {
  const { sessionKey } = useContext(SessionKeyContext)
  return { sessionKey }
}

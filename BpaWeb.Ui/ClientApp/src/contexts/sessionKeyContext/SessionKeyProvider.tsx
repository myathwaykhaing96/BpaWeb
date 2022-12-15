import { useMemo, useState, useEffect } from 'react'
import { SessionKeyContext } from './sessionKey.context'
import { getSessionKeyByCondition, setSessionKeyIntoSessionStorage } from './sessionKey.func'

export interface Props {
  children?: React.ReactNode
  defaultSession?: string | null,
  getValueFromUrl?: boolean,
  urlParamKey?: string
  storeSessionStorage?: boolean,
}

interface DefaultValueProps extends Props {
  defaultSession: string | null,
  getValueFromUrl: boolean,
  urlParamKey: string,
  storeSessionStorage: boolean,
}

const defaultPropsValue: DefaultValueProps = {
  defaultSession: null,
  getValueFromUrl: false,
  urlParamKey: 'session-key',
  storeSessionStorage: true,
}

const SessionKeyProvider: React.FC<Props> = (props) => {
  const { children, defaultSession, storeSessionStorage, getValueFromUrl, urlParamKey } = {
    ...defaultPropsValue,
    ...props,
  }

  const getSessionKeyOrDefault = useMemo(
    () =>
      getSessionKeyByCondition(getValueFromUrl, urlParamKey, storeSessionStorage)
      || defaultSession
      || defaultPropsValue.defaultSession
      || null
    , []
  )

  const [sessionKey, setSessionKey] = useState(getSessionKeyOrDefault)

  useEffect(() => {
    if (storeSessionStorage && sessionKey) setSessionKeyIntoSessionStorage(sessionKey)
  }, [storeSessionStorage, sessionKey])

  const sessionKeyProviderValue = useMemo(() => ({ sessionKey }), [sessionKey])

  return (
    <SessionKeyContext.Provider value={sessionKeyProviderValue}>{children}</SessionKeyContext.Provider>
  )
}

export default SessionKeyProvider

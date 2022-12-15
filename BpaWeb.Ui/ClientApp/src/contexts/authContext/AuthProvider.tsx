import { useMemo, useState } from 'react'
import { AuthContext } from './auth.context'
import { AuthProps } from 'MyModels'
import { ChannelRequestProps, getChannel } from 'services/api/channelApi'
import { logger } from 'services'
import { useNavigate } from 'react-router-dom'
import { IChannel } from 'types'
// import { fakeAuth } from 'services/api/mockAuthApi'

type Props = {
  children?: React.ReactNode
  //defaultValue: authProps
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    channel: null
  } as AuthProps)
  const navigate = useNavigate();

  const getAuth = useMemo(
    () =>
      async (sessionKey: string, redirectLink: string = '/bpa-web') => {
        auth.isAuthenticated = false
        console.log(auth)
        if (sessionKey) {
          const channelPromise = await getChannel({
            sessionKey: sessionKey,
          } as ChannelRequestProps)
          if (channelPromise) {
            auth.channel = channelPromise as IChannel
            auth.isAuthenticated = true
            //logger.log('Get auth Success')
          } else {
            //logger.log('Get auth Failed')
            auth.channel = null
            auth.isAuthenticated = false
            redirectLink = '/401'
          }
        } else {
          //logger.log('Required Sign Token')
          auth.channel = null
          auth.isAuthenticated = false
          redirectLink = '/401'
        }
        setAuth(auth)
        // const origin = location.state?.from?.pathname || redirectLink
        navigate(redirectLink, { replace: true })
      },
    [auth, navigate],
  )

  const authProviderValue = useMemo(() => ({ auth, setAuth, getAuth }), [getAuth, auth])

  return <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>
}

export default AuthProvider

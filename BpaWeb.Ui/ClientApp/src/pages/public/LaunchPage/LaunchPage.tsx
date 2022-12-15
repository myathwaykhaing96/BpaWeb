import React, { useEffect, useMemo } from 'react'
import { useAuth, useSessionKey } from 'contexts'
// import { Button } from 'components'
import { useLocation, useNavigate } from 'react-router-dom'
import { CompanyName } from 'assets'
import { inherits } from 'util'

type Props = {}

const LaunchPage: React.FC<Props> = (props) => {
  const { sessionKey } = useSessionKey()
  const { getAuth } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleAuth = useMemo(
    () => () => {
      if (sessionKey) {
        getAuth(sessionKey, location?.state?.from)
      } else {
        navigate('/401', { replace: true })
      }
    },
    [getAuth, location, navigate, sessionKey],
  )

  useEffect(() => {
    handleAuth()
  }, [handleAuth, sessionKey])

  return (
    <div style={{ backgroundColor: 'purple', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{margin: '0 auto'}}>
        <img src={CompanyName} alt="Channel Logo" />
      </div>
    </div>
  )
}

export default LaunchPage

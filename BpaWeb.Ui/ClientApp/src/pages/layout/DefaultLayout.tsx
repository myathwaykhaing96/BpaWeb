import React from 'react'
import { useAuth, useSessionKey, useTheme } from 'contexts'
import { Header, Content, Footer } from './shared'
import { Navigate, NavLink, useLocation } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
}

export function fetchCount(amount = 1, time = 2000) {
  amount++
  return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), time))
}

const DefaultLayout: React.FC<Props> = (props) => {
  const { auth } = useAuth()
  const { sessionKey } = useSessionKey()
  const location = useLocation()

  if (!sessionKey || !auth?.isAuthenticated) {
    return <Navigate to="/launch-page" state={{ from: location.pathname }} />
  }

  return (
    <div className="page-container">
      {/* <Sidebar /> */}
      <Header />
      <div className="content-container">
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout

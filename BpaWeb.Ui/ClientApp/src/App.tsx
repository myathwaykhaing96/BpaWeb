import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, AuthProvider, SessionKeyProvider } from 'contexts'
import { PublicRoute } from 'routes'
import { sessionKeyConfig, themeConfig } from 'configs'

type Props = {}

const App: React.FC<Props> = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SessionKeyProvider {...sessionKeyConfig}>
        <AuthProvider>
          <ThemeProvider {...themeConfig}>
            <PublicRoute />
          </ThemeProvider>
        </AuthProvider>
      </SessionKeyProvider>
    </BrowserRouter>
  )
}

export default App

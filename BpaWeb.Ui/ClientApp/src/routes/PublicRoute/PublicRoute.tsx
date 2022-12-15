import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import publicRoutes from './publicRoutes'

type Props = {}

const PublicRoute: React.FC<Props> = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          {publicRoutes.map(({ key, props, elementProps, index, ...other }) => (
            <Route key={key} element={<other.element {...elementProps} />} {...props} index />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}

export default PublicRoute

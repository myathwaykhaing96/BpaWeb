import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import privateRoutes from './privateRoutes'

type Props = {}

const PrivateRoute: React.FC<Props> = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        {privateRoutes.map(({ key, props, elementProps, index, ...other }) => (
          <Route
            key={key}
            element={<other.element {...elementProps} />}
            {...props}
            index
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default PrivateRoute

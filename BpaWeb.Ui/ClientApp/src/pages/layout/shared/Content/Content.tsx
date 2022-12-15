import React from 'react'
import { PrivateRoute } from 'routes'

type Props = {}

const Content: React.FC<Props> = (props) => {
  return (
    <>
      <PrivateRoute />
    </>
  )
}

export default Content

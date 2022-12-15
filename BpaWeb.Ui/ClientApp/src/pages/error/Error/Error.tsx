import React from 'react'

type Props = {
  statusCode: number,
  message: string
}

const Error = (props: Props) => {
  return (
    <div>
      <h4>{props.statusCode}</h4>
      <span>{props.message}</span>
    </div>
  )
}

export default Error
import React from 'react'

type Props = {
  children: any,
  active?: boolean,
}

const BreadcrumbItem = ({ children }: Props) => {
  return (
    <li className='breadcrumb'>
      {children}
    </li>
  )
}

export default BreadcrumbItem
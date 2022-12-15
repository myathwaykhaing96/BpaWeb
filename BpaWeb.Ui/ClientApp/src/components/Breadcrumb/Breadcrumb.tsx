import BreadcrumbItem from 'components/Breadcrumb.Item/Breadcrumb.Item'
import React from 'react'

type Props = {
  children: React.ReactElement
}

const Breadcrumb = ({ children }: Props) => {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        {children}
      </ol>
    </nav>
  )
}

// export default Breadcrumb

export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
})
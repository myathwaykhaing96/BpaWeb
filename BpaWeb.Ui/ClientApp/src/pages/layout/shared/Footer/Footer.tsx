import React from 'react'
import './footer.style.css'

type Props = {}

const Footer: React.FC<Props> = (props) => {
  return (
    <div className="footer theme-footer">
      <div className="copy-right-text">
        A Bank © Copyright 2022. All Right Reserved.
      </div>
    </div>
  )
}

export default Footer
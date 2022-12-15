import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.style.css'
import { CompanyName } from 'assets'
import { useAuth } from 'contexts'

type Props = {}

const Header: React.FC<Props> = (props) => {
  const { auth } = useAuth();
  return (
    <header className="header theme-header">
      <nav className="nav">
        <img src={CompanyName} alt="Channel Logo" />
        {/* <img src={auth?.channel?.channelLogo} alt="Channel Logo" /> */}
        {/* <NavLink to="air/billerName">Biller</NavLink> */}
      </nav>
    </header>
  )
}

export default Header

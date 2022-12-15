import React from 'react'
import { ErrorRocket } from 'assets'
import './page401.style.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from 'components'
import { publicRoutePaths } from 'routes'

type Props = {}

const Page401 = (props: Props) => {
  const navigate = useNavigate()

  const handleOnClick = () => navigate(publicRoutePaths.Launch, { replace: true })

  return (
    <div className="page-401">
      <div className="error-image">
        <img src={ErrorRocket} alt="Error Page" />
      </div>
      <span className="error-title">Missing Permission</span>
      <div className="error-description">Sorry, you don’t have access to this page.</div>

      <Button label={'Back to home'} onClick={handleOnClick}>
        Back to home
      </Button>
    </div>
  )
}

export default Page401

import React from 'react'
import { ErrorRocket } from 'assets'
import './page404.style.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components'
import { publicRoutePaths  } from 'routes'

type Props = {}

const Page404 = (props: Props) => {
  const navigate = useNavigate()
  
  const handleOnClick = () => navigate(publicRoutePaths.Launch, { replace: true })

  return (
    <div className="page-404">
      <div className="error-image">
        <img src={ErrorRocket} alt="Error Page" />
      </div>
      <span className="error-title">Page not found</span>
      <div className="error-description">
        Sorry, the page you’re looking for doesn’t exist.
        {/* If you think something is broken, report a problem. */}
      </div>

      <Button label={'Back to home'} onClick={handleOnClick}>
        Back to home
      </Button>
    </div>
  )
}

export default Page404
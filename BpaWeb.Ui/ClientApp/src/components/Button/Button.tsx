import React from 'react'
import './button.css'

interface Props {
  /**
   * Class name attribute is used to specify a class for an HTML element.
   */
  className?: string
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick: CallableFunction
  style?: React.CSSProperties
  children?: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<Props> = ({ 
  className,
  children, 
  style,
  onClick
}) => {

  const handleOnClick = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => onClick(e)

  className = `main ${className}`
  
  return (
    <button style={style} onClick={(e) => handleOnClick(e)}>
      {children}
    </button>
  )
}

export default Button
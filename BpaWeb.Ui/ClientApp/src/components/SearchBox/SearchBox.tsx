import React, { useState } from 'react'
import './searchBox.css'

type Props = {
  value?: string
  placeholder?: string
}

const defaultProps = {
  value: '',
  placeholder: '',
}

const SearchBox = (props: Props) => {
  props = { ...defaultProps, ...props }
  const [value, setValue] = useState(props.value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

  return (
    <input
      // className={['react-button', `storybook-button--${size}`, mode].join(' ')}
      type="search"
      value={value}
      placeholder={props.placeholder}
      onChange={(event) => handleChange(event)}
    />
  )
}

export default SearchBox
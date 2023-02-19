import React from 'react'
import './Button.css'

export default function Button({className='', children, onClick, color='blue'}) {
  const classNames = `Button ${color} ${className}`
  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  )
}

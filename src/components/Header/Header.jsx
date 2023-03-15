import React from 'react'

export function Header ({text, userEmail}) {
  return (
    <nav className='nav'>
      <img src='/Las_chidas-logo-100x100.png' alt='logo_100x100px' />
      <p>{text}{userEmail}</p>
    </nav>
  )
}

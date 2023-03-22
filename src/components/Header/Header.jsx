import React from 'react'

export function Header ({text, userEmail, date}) {
  return (
    <nav className='nav'>
      <img src='/Las_chidas-logo-100x100.png' alt='logo_100x100px' />
      <div>
        <p className='text-header'>{text}</p>
        <p className='email-header'>{userEmail}</p>
      </div>
      <p className='date-header'>{date}</p>
    </nav>
  )
}

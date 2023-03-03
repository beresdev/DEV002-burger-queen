import React from 'react'
import { UserAuth } from '../../context/AuthContext'

export function Header () {
  const { user } = UserAuth()
  return (
    <nav className='nav'>
      <img src='/Las_chidas-logo-100x100.png' alt='logo_100x100px' />
      <p>Hello, {user.email}</p>
    </nav>
  )
}

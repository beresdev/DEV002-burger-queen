import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'

export const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth()

  if (!user) {
    console.log('Inicia sesión para acceder al menu')
    window.history.pushState({}, '', '#/')
    return <Navigate to='/' />
  }
  return children
}

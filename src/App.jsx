import React from 'react'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'

import { Login } from './pages/Login'
import { MenuW } from './pages/MenuW'
import { NewOrder } from './pages/NewOrder'
import { MyOrders } from './pages/MyOrders'
import { ProtectedRoute } from './pages/ProtectedRoute'
import { AuthContextProvider } from './context/AuthContext'

const router = createHashRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/MenuW',
    element: <ProtectedRoute><MenuW /></ProtectedRoute>
  },
  {
    path: '/NewOrder',
    element: <NewOrder />
  },
  {
    path: '/MyOrders',
    element: <MyOrders />
  },
  {
    path: '*',
    element: <h1>🎃 Not found</h1>
  }
])

function App () {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App

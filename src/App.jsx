import React from 'react'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'

import { Login } from './pages/Login/Login'
import { MenuW } from './pages/MenuW/MenuW'
import { NewOrder } from './pages/NewOrder/NewOrder'
import { MyOrders } from './pages/MyOrders/MyOrders'
import { ProtectedRoute } from './ProtectedRoute'


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
  return (<RouterProvider router={router} />)
}

export default App

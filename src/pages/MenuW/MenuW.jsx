import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { UserAuth } from '../../context/AuthContext.jsx'

export function MenuW () {
  const { logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      console.log('logout')
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <>
      <Header />
      <section className='menu-options'>
        <Link to='/NewOrder'>
          <button>New Order</button>
        </Link>
        <Link to='/MyOrders'>
          <button>My Orders</button>
        </Link>
      </section>
      <button onClick={handleLogout} className='logout'><i className='fa-solid fa-right-from-bracket' /></button>
    </>
  )
}

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { logout } from '../../firebase/firebaseFunctions'

export function MenuW ({ userEmail, date, linkA, buttonAfunction, textA, linkB, buttonBfunction, textB }) {
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    try {
      await logout()
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <>
      <Header text='Hello ' userEmail={userEmail} date={date} />
      <section className='menu-options'>
        <Link to={linkA}>
          <button className='menu-button' onClick={typeof buttonAfunction === 'function' ? buttonAfunction : null}>{textA}</button>
          {/* <button onClick={() => {setOrderN()}}>New Order</button> */}
        </Link>
        <Link to={linkB}>
          <button className='menu-button' onClick={typeof buttonBfunction === 'function' ? buttonBfunction : null}>{textB}</button>
          {/* <button onClick={() =>{filter()}}>My Orders</button> */}
        </Link>
      </section>
      <button onClick={handleLogout} className='logout'><i className='fa-solid fa-right-from-bracket' /></button>
    </>
  )
}

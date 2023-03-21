import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../firebase/firebaseFunctions.js'

export function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/MenuW')
    } catch (e) {
      setError(error.message)
      console.log(error.message)
    }
  }
  return (
    <>
      <section className='login-container'>
        <div className='logo-container'>
          <img src='/LasChidas_500x500.png' alt='logotipo-las-chidas' />
        </div>
        <form onSubmit={handleSubmit} className='form'>
          <label>Email: </label>
          <input onChange={(e) => setEmail(e.target.value)} type='text' />
          <label>Password: </label>
          <input onChange={(e) => setPassword(e.target.value)} type='password' />
          <button className='login-button' type='submit'>Iniciar Sesión</button>
        </form>
      </section>
    </>
  )
}

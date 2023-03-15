import { React, useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebaseInit'
import { Login } from './pages/Login/Login'
import { MenuW } from './pages/MenuW/MenuW'
import { NewOrder } from './pages/NewOrder/NewOrder'
import { MyOrders } from './pages/MyOrders/MyOrders'
import { orderNumber } from './lib/functions.js'
import { addOrder } from './firebase/firestoreFunctions'

function App () {
  const [user, setUser] = useState(false);
  const [orderNum, setOrderNum] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) { setUser(true)
      localStorage.setItem("name",user.email);
      }
    })
    return unsubscribe
  }, [])

  const setOrderN = (string) => {
    if(string === null) {
      setOrderNum('');
    } else {
      const orderN = orderNumber(); 
      setOrderNum(orderN);
    }
  }

  console.log(user)
  console.log(orderNum)

  return (
    <HashRouter>
      <Routes>
        {user
          ? (
            <>
              <Route path='/MenuW' element={<MenuW setOrderN={setOrderN}/>} />
              <Route path='/NewOrder' element={<NewOrder orderId={orderNum} addOrder={addOrder} setOrderN={setOrderN} />} />
              <Route path='/MyOrders' element={<MyOrders />} />
            </>
            )
          : (
            <>
              <Route path='/' element={<Login />} />
              <Route path='*' element={<Login />} />
            </>
            )}
        <Route path='/' element={<Login />} />
      </Routes>
    </HashRouter>
  )
}

export default App

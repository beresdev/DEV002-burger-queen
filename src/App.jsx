import { React, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebaseInit'
import { Login } from './pages/Login/Login'
import { NotFound } from './pages/NotFound/NotFound'
import { MenuW } from './pages/MenuW/MenuW'
import { NewOrder } from './pages/NewOrder/NewOrder'
import { MyOrders } from './pages/MyOrders/MyOrders'
import { orderNumber } from './lib/functions.js'
import { addOrder, onGetOrders } from './firebase/firestoreFunctions'

function App () {
  const [user, setUser] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [orderNum, setOrderNum] = useState('');
  const [orders, setOrders] = useState([]);
  const [uOrders, setUOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) { setUser(true)
        setUserEmail(user.email);
      } else {
        setUser(false);
        setUserEmail('');
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

  useEffect(() => {
    const unsubscribe = onGetOrders((querySnapshot) => {
      const newOrders = querySnapshot.docs.map(doc => doc.data());
      setOrders(newOrders);
    });
    return unsubscribe;
  }, [])

  const userOrders = () => {
    const uOrders = orders.filter((order) => order.orderedBy === userEmail)
    console.log(uOrders)
    setUOrders(uOrders);
  }

  console.log(user)

  return (
    <BrowserRouter>
        <Routes>
          {userEmail === 'ana@laschidas.com' || userEmail === 'carlos@laschidas.com' && (
              <>
                <Route path='/MenuW' element={<MenuW  userEmail={userEmail} linkA="/NewOrder" buttonAfunction={setOrderN} textA='New Order' linkB="/MyOrders" buttonBfunction={userOrders} textB='My Orders'/>} />
                <Route path='/NewOrder' element={<NewOrder userEmail={userEmail} orderId={orderNum} filter={userOrders} addOrder={addOrder} setOrderN={setOrderN} />} />
                <Route path='/MyOrders' element={<MyOrders userEmail={userEmail} orders={uOrders} filter={userOrders} setOrderN={setOrderN}/>} />
                <Route path='/*' element={<Navigate to='/MenuW' />} />
              </>
          )}
          {userEmail === 'benito@laschidas.com' || userEmail === 'bety@laschidas.com' &&(
            <>
              <Route path='/Menu' element={<MenuW  userEmail={userEmail} linkA="/Orders" buttonAfunction={setOrderN} textA='Orders' linkB="/Stats" buttonBfunction={userOrders} textB='Stats'/>} />
              <Route path='/*' element={<Navigate to='/Menu' />} />
            </>
          )}
          {!user && (
            <>
              <Route path='/' element={<Login />} />
              <Route path='*' element={<NotFound/>} />
            </>
          )}
          <>
            <Route path='/*' element={<Login />} />
          </>
        </Routes>
      </BrowserRouter>
  )
}

export default App



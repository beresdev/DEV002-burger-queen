import { React, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebaseInit'
import { Login } from './pages/Login/Login'
import { NotFound } from './pages/NotFound/NotFound'
import { MenuW } from './pages/MenuW/MenuW'
import { NewOrder } from './pages/NewOrder/NewOrder'
import { MyOrders } from './pages/MyOrders/MyOrders'
import { Stats } from './pages/Stats/Stats'
import { orderNumber, formatingDate } from './lib/functions.js'
import { addOrder, onGetOrders, updateOrder } from './firebase/firestoreFunctions'

function App () {
  const [user, setUser] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [orderNum, setOrderNum] = useState('')
  const [orders, setOrders] = useState([])
  const [todayOrders, setTodayOrders] = useState([])
  const [uOrders, setUOrders] = useState([])

  const start = Date.now()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const now = new Date(start).toLocaleString('en-US', options)
  const today = new Date(start).toLocaleDateString()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(true)
        setUserEmail(user.email)
      } else {
        setUser(false)
        setUserEmail('')
      }
    })
    return unsubscribe
  }, [])

  const setOrderN = (string) => {
    if (string === null) {
      setOrderNum('')
    } else {
      const orderN = orderNumber()
      setOrderNum(orderN)
    }
  }

  // all orders
  useEffect(() => {
    const unsubscribe = onGetOrders((querySnapshot) => {
      const newOrders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setOrders(newOrders)
    })
    return unsubscribe
  }, [])

  // filtered orders by day(today)
  useEffect(() => {
    const tOrders = orders.filter(order => order.createdAt && order.createdAt.toDate().toLocaleDateString() === today)
    setTodayOrders(tOrders)
  }, [orders])

  // filtered todayOrders by user(email)
  useEffect(() => {
    const uOrders = todayOrders.filter((order) => order.orderedBy === userEmail)
    setUOrders(uOrders)
  }, [todayOrders, userEmail])

  return (
    <BrowserRouter>
      <Routes>
        {(userEmail === 'ana@laschidas.com' || userEmail === 'carlos@laschidas.com') && (
          <>
            <Route path='/MenuW' element={<MenuW userEmail={userEmail} date={now} linkA='/NewOrder' buttonAfunction={setOrderN} textA='New Order' linkB='/MyOrders' textB='My Orders' />} />
            <Route path='/NewOrder' element={<NewOrder date={now} userEmail={userEmail} orderId={orderNum} addOrder={addOrder} setOrderN={setOrderN} />} />
            <Route path='/MyOrders' element={<MyOrders textH='MY ORDERS' date={now} userEmail={userEmail} orders={uOrders} setOrderN={setOrderN} rol='W' updateFunction={updateOrder} text='NEW ORDER' route='/NewOrder' />} />
            <Route path='/*' element={<Navigate to='/MenuW' />} />
          </>
        )}
        {(userEmail === 'benito@laschidas.com' || userEmail === 'bety@laschidas.com') && (
          <>
            <Route path='/Menu' element={<MenuW userEmail={userEmail} date={now} linkA='/Orders' textA='Orders' linkB='/Stats' textB='Reports' />} />
            <Route path='/Orders' element={<MyOrders textH='ORDERS' date={now} userEmail={userEmail} orders={todayOrders} rol='HC' updateFunction={updateOrder} text='REPORTS' route='/Stats' />} />
            <Route path='/Stats' element={<Stats textH='REPORTS' date={now} user={userEmail} orders={orders} fdate={formatingDate} />} />
            <Route path='/*' element={<Navigate to='/Menu' />} />
          </>
        )}
        {!user && (
          <>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<NotFound />} />
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

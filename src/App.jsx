import { React, useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebaseInit'
import { Login } from './pages/Login/Login'
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



  return (
    <HashRouter>
      <Routes>
        {user
          ? (
            <>
              <Route path='/MenuW' element={<MenuW setOrderN={setOrderN} userEmail={userEmail} filter={userOrders}/>} />
              <Route path='/NewOrder' element={<NewOrder userEmail={userEmail} orderId={orderNum} filter={userOrders} addOrder={addOrder} setOrderN={setOrderN} />} />
              <Route path='/MyOrders' element={<MyOrders userEmail={userEmail} orders={uOrders} filter={userOrders} setOrderN={setOrderN}/>} />
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

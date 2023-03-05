import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseInit";
import { Login } from "./pages/Login/Login";
import { MenuW } from "./pages/MenuW/MenuW";
import { NewOrder } from "./pages/NewOrder/NewOrder";
import { MyOrders } from "./pages/MyOrders/MyOrders";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth (user => {
      setUser(user);
    }));

    return unsubscribe;
  }, []);

  console.log(user);

  if(user === null) {
    return <div>Loading ... ⏳</div>
  }

  return(
    <BrowserRouter>
    <Routes>
      if(user) {
        <>
          <Route path="/MenuW" element={<MenuW />} />
          <Route path="/NewOrder" element={<NewOrder />} />
          <Route path="/MyOrders" element={<MyOrders />} />
        </>
      } else {
        <>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<h1>🎃 Not found</h1>} />
        </>
      }
    </Routes>
    </BrowserRouter>
  )
}

export default App;

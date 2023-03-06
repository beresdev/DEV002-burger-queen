import { React, useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseInit";
import { Login } from "./pages/Login/Login";
import { MenuW } from "./pages/MenuW/MenuW";
import { NewOrder } from "./pages/NewOrder/NewOrder";
import { MyOrders } from "./pages/MyOrders/MyOrders";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user => {
      if(user)
      setUser(true);
    }));
    return unsubscribe;
  }, []);

  console.log(user);

  return(
    <HashRouter>
      <Routes>
        {user ? (
            <>
              <Route path="/MenuW" element={<MenuW />} />
              <Route path="/NewOrder" element={<NewOrder />} />
              <Route path="/MyOrders" element={<MyOrders />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />}  />
              <Route path="*" element={<Login />} />
            </>
          )}
          <Route path="/" element={<Login />}  />
      </Routes>
    </HashRouter>
  )
}

export default App;

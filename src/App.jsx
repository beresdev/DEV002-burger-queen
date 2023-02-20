import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Login } from './components/Login';
import { MenuW } from "./components/MenuW";
import { NewOrder } from "./components/NewOrder";
import { MyOrders } from "./components/MyOrders";


const router = createHashRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/MenuW",
    element: <MenuW />
  },
  {
    path: "/NewOrder",
    element: <NewOrder />
  },
  {
    path: "/MyOrders",
    element: <MyOrders />
  },
  {
    path: "*",
    element: <h1>🎃 Not found</h1>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

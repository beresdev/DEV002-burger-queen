import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Login } from './pages/Login';
import { MenuW } from "./pages/MenuW";
import { NewOrder } from "./pages/NewOrder";
import { MyOrders } from "./pages/MyOrders";


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

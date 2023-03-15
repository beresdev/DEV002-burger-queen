import { Order } from '../../components/Order/Order'
import { Link } from 'react-router-dom'

export function MyOrders ({orders}) {

console.log(orders);

  return(
    <>
      <h1>MyOrders</h1>
      <button>
        <Link to='/MenuW'>Menu</Link>
      </button>
      <Order orders={orders}/>
    </>
  )
}

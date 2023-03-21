import { Header } from '../../components/Header/Header'
import { OrdersDetails } from '../../components/OrdersDetails/OrdersDetails'
import { MenuButton } from '../../components/MenuButton/MenuButton';
import { Footer } from '../../components/Footer/Footer';
import { useState} from 'react';

export function Stats({user, orders, fdate}) {
  const [formatedDate, setformatedDate] = useState('');
  const [dateOrders, setDateOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState('');
  const [total, setTotal] = useState('')

  const handleClick = () => {
    const filteredOrders = orders.filter(order => order.status === 'DELIVERED' && order.createdAt.toDate().toLocaleDateString() === formatedDate);
    const totalO = filteredOrders.length;
    const totalP = filteredOrders.reduce((sum, item) => sum + item.total, 0);
    setDateOrders(filteredOrders);
    setTotalOrders(totalO);
    setTotal(totalP)
  }

    return (
        <>
          <Header userEmail={user}></Header>
          <h1>STATS</h1>
          <div className='sections-container'>
            <section className='info-section'>
              <div className='filter'>
                <div className='labels'>
                  <p>Date: </p>
                  <p>Orders: </p>
                  <p>Total: </p>
                </div>
                <div className='values'>
                    <input type="date" name="date" id="date" onChange={(e) => setformatedDate(fdate(e.target.value))} />
                    <p>{totalOrders}</p>
                    <p>$ {total}.00 </p>
                </div>
              </div>
            <button className='menu-button' onClick={()=>{handleClick()}}>DETAILS</button>
            </section>
            <section className='details-section'>
                <div className='concepts'>
                    <p>Order Id</p>
                    <p>Created at</p>
                    <p>Cooking since</p>
                    <p>Ready at</p>
                    <p>Delivered at</p>
                    <p>Delivery time</p>
                </div>
                <OrdersDetails orders={dateOrders} date={formatedDate}/>
            </section>
          </div>
          <Footer>
            <MenuButton text='ORDERS' route="/Orders"></MenuButton>
          </Footer>
        </>
    )
} 
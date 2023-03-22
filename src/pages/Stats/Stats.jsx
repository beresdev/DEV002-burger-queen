import { Header } from '../../components/Header/Header'
import { OrdersDetails } from '../../components/OrdersDetails/OrdersDetails'
import { MenuButton } from '../../components/MenuButton/MenuButton';
import { Footer } from '../../components/Footer/Footer';
import { useState} from 'react';

export function Stats({user, textH, date, orders, fdate}) {
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
          <Header text={textH} userEmail={user} date={date}></Header>
          <div className='sections-container'>
            <section className='date-section'>
              <p>Date: </p>
              <input type="date" name="date" id="date" onChange={(e) => setformatedDate(fdate(e.target.value))} />
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
            <section className='info-section'>
              <p>Orders: {totalOrders} </p>
              <p>Total: $ {total}.00  </p>
            </section>
          </div>
          <Footer>
            <MenuButton text='ORDERS' route="/Orders"></MenuButton>
          </Footer>
        </>
    )
} 
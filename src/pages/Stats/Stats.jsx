import { Header } from '../../components/Header/Header'
import { MenuButton } from '../../components/MenuButton/MenuButton';
import { Footer } from '../../components/Footer/Footer';

function OrderDetails({orders}) {
    return(
        <ul className="order-list">
        {
          orders.map(order => {
            const startTime = order.createdAt.toDate();
            const endTime = order.deliveredAt.toDate();
            const timeDiff = endTime.getTime() - startTime.getTime();
            const hours = Math.floor(timeDiff / 1000 / 60 / 60);
            const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
            const seconds = Math.floor((timeDiff / 1000) % 60);
            const timeToD = `${hours}h ${minutes}m ${seconds}s`;
            return (
                <>
                  <div key={order.orderId}>
                    <li>{order.orderId}   - 
                        {order.createdAt.toDate().toLocaleTimeString()}   -
                        {/* {order.cookingSince.toDate().toLocaleTimeString()} -
                        {order.readyAt.toDate().toLocaleTimeString()} - */}
                        {order.deliveredAt.toDate().toLocaleTimeString()}   -
                        {timeToD}
                     </li>
                  </div>
                </>
            )
            })
        }
    </ul>
    )
}

export function Stats({user, orders}) {
    return (
        <>
          <Header userEmail={user}></Header>
          <h1>STATS</h1>
          <div className='sections-container'>
            <section className='info-section'>
                <div className='labels'>
                <p>Date: </p>
                <p>Orders: </p>
                <p>Total: </p>
                </div>
                <div className='values'>
                    <input type="date" name="date" id="date" />
                    <p>24</p>
                    <p>$ </p>
                </div>
            <button onClick={()=>{OrderDetails()}}>DETAILS</button>
            </section>
            <section className='details-section'>
                <div className='concepts'>
                    <p>Order Id</p>
                    <p>Created at</p>
                    {/* <p>Cooking since</p>
                    <p>Ready at</p> */}
                    <p>Delivered at</p>
                    <p>Time to deliver</p>
                </div>
                <OrderDetails orders={orders}/>
            </section>
          </div>
          <Footer>
            <MenuButton text='ORDERS' route="/Orders"></MenuButton>
          </Footer>
        </>
    )
} 
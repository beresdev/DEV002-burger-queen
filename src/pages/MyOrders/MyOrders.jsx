import { Order } from '../../components/Order/Order'
import { Footer } from '../../components/Footer/Footer';
import { MenuButton } from '../../components/MenuButton/MenuButton';
import { Header } from '../../components/Header/Header'

export function MyOrders ({orders, userEmail, setOrderN}) {
  return(
    <>
      <Header text={'My orders: '} userEmail={userEmail}/>
      <div className='myOrders-container'>
        <section className='orders-section'>
          <Order orders={orders}/>
        </section>
        <Footer>
          <MenuButton text="NEW ORDER" function={setOrderN} route="/NewOrder"/>
      </Footer>
      </div>
    </>
  )
}

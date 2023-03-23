import { Order } from '../../components/Order/Order'
import { Footer } from '../../components/Footer/Footer'
import { MenuButton } from '../../components/MenuButton/MenuButton'
import { Header } from '../../components/Header/Header'

export function MyOrders ({ textH, orders, date, userEmail, setOrderN, rol, updateFunction, text, route }) {
  return (
    <>
      <Header text={textH} userEmail={userEmail} date={date} />
      <div className='myOrders-container'>
        <section className='orders-section'>
          <Order orders={orders} rol={rol} functionUpdate={updateFunction} />
        </section>
        <Footer>
          <MenuButton text={text} function={setOrderN} route={route} />
        </Footer>
      </div>
    </>
  )
}

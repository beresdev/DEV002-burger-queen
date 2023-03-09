import { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { ProductCard } from '../../components/ProductCard/ProductCard'
// import { Bill } from '../../components/Bill/Bill'
import { Footer } from '../../components/Footer/Footer'
import { MenuButton } from '../../components/MenuButton/MenuButton'


export function NewOrder () {
  const [isSelected, setIsSelected] = useState('breakfast');
  const [order, setOrder] = useState([])

  const setProductProp = (data) => {
    const newData = {...data, subtotal: (data.quantity * data.price)}
    setOrder([...order, newData])
  }
  
  const total = order.reduce((sum, item) => sum + item.subtotal, 0)
  console.log(total)
  console.log(order)


  return (
    <main className='main-NewOrder'>
      <Header />
      <section className='products-section'>
        <div className='menu-types-selector'>
          <button className='option' onClick={() => { setIsSelected('breakfast') }}>Breakfast</button>
          <button className='option' onClick={() => { setIsSelected('lunchDinner') }}>Lunch/Dinner</button>
        </div>
        <div className='products-container'>
          <ProductCard type={isSelected} setProductProp={setProductProp} />
        </div>
      </section>
      <section className='bill-section'>
        <div className='bill-container'>
          <ul>
            {order.map((item) => (
              <li key={item.id}>
                {item.item} - $ {item.price}
                <p>{item.total}</p>
              </li>
            ))}
          </ul>
          <p>{total}</p>
        </div>
        <MenuButton text='Cancel' />
        <MenuButton text='Send Kitchen' />
      </section>
      <Footer>
        <MenuButton text='NEW ORDER' route='/NewOrder' />
        <MenuButton text='MY ORDERS' route='/MyOrders' />
      </Footer>
    </main>
  )
}

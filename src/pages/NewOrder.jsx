import { useState } from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { Bill } from "../components/Bill";
import { Footer } from '../components/Footer';
import { MenuButton } from '../components/MenuButton';

export function NewOrder() {

  const [isSelected, setIsSelected] = useState('breakfast');

return (
  <main className="main-NewOrder">
    <Header />
    <section className="products-section">
      <div className='menu-types-selector'>
        <button className='option' onClick = {() => {setIsSelected('breakfast')}}>Breakfast</button>
        <button className='option' onClick = {() => {setIsSelected('lunchDinner')}}>Lunch/Dinner</button>
      </div>
      <div className='products-container'>
        <ProductCard type = {isSelected} />
      </div> 
    </section>
    <Bill>
      <div className='buttons-container'>
        <MenuButton text = {'Cancel'}/>
        <MenuButton text = {'Send Kitchen'}/>
      </div>
    </Bill>
    <Footer>
      <MenuButton text = {'NEW ORDER'} route = {'/NewOrder'}/>
      <MenuButton text = {'MY ORDERS'} route = {'/MyOrders'}/>
    </Footer>
  </main>
  )
}

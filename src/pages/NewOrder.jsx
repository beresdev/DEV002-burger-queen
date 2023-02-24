import { useState } from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { Bill } from "../components/Bill";

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
    <Bill className="bill-section"/>
  </main>
  )
}

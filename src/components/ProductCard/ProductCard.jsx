import data from '../../menu.json'

export function ProductCard ({type, setProductProp}) {

  return data[type].map((data) => (
    <div className='product' key={data.id} onClick={() => {setProductProp({id: data.id, item: data.item, price: data.price, quantity: 1})}}>
      <p className='product-name'>{data.item}</p>
      <p className='product-price'>$ {data.price}</p>
    </div>
  ))
}

import data from '../../menu.json'

export function ProductCard ({type, setProductProp}) {

  return data[type].map((data) => (
    <div className='product' key={data.id} onClick={() => {setProductProp([data.id, data.item, data.price])}}>
      <p className='product-name'>{data.item}</p>
      <p className='product-price'>{data.price}</p>
    </div>
  ))
}

import data from '../../menu.json'

export function ProductCard ({type, setProductId}) {

  return data[type].map((data) => (
    <div className='product' key={data.id} onClick={()=>{setProductId(data.id)}}>
      <p className='product-name'>{data.item}</p>
      <p className='product-price'>{data.price}</p>
    </div>
  ))
}

import data from '../../menu.json';

export function Bill ({ type, productId, children }) {
  if(productId === null) {
    console.log("no hay productos agregados")
    return (
      <section className='bill-section'>
        <div className='bill-container'>
          <p>Agrega productos</p>
        </div>
        {children}
      </section>
    )
  } else {
    console.log(productId)
    const product = data[type].filter((element) => element.id === productId) ;
    console.log(product[0].item)
    const productA = Object.entries(product[0]).flat(1);
    console.log(productA)

    return (
      <section className='bill-section'>
        <div className='bill-container'>
          <p>{product[0].item}</p>
          <p>{product[0].price}</p>
        </div>
        {children}
      </section>
    )
  }
}

export function Bill ({ productProp, children }) {
  if(productProp === null) {
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
    return (
      <section className='bill-section'>
        <div className='bill-container'>
          <p>{productProp[1]}</p>
          <p>{productProp[2]}</p>
        </div>
        {children}
      </section>
    )
  }
}

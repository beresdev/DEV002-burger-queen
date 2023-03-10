export function Order({products}) {
  const addedItems = [];

const renderOrderItems = () => {
  const total = products.reduce((sum, item) => sum + item.subtotal, 0);
  console.log(total)

  console.log(addedItems)
  return products.map((item) => {
      if (addedItems.includes(item.id)) {
        return null; // si el item ya ha sido renderizado, no lo renderiza
      } else {
        addedItems.push(item.id) // agrega el ID al estado para que no se renderize de nuevo
        return (
          <div key={item.id} className='order-element'>
            <div className="counters-buttons">
              <i className="fa-solid fa-plus"></i>
              <p className="counter">1</p>
              <i className="fa-solid fa-minus"></i>
            </div>
            <div className="item-container">
              <p>{item.item}</p>
              <p>${item.price}</p>
            </div>
            <div className="trash-container">
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
        );
      }
    });
  }

  return(
    <div className="elements-container">
      {renderOrderItems()}
    </div>
  )
  }
export function Order({ products, productOperation }) {
  const renderOrderItems = () => {
    return products.map((item) => {
      return (
        <div key={item.id} className="order-element">
          <div className="counters-buttons">
            <i className="fa-solid fa-plus" onClick={() => {productOperation(item.id, 'add')}} ></i>
            <p className="counter">{item.quantity}</p>
            <i className="fa-solid fa-minus" onClick={() => {productOperation(item.id, 'sub')}}></i>
          </div>
          <div className="item-container">
            <p>{item.item}</p>
            <p>${item.subtotal}</p>
          </div>
          <div className="trash-container">
            <i className="fa-solid fa-trash" onClick={() => {productOperation(item.id, 'del')}}></i>
          </div>
        </div>
      );
    });
  };

  return <div className="elements-container">{renderOrderItems()}</div>;
}

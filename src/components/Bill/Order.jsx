export function Order({ products }) {
  const renderOrderItems = () => {
    return products.map((item) => {
      return (
        <div key={item.id} className="order-element">
          <div className="counters-buttons">
            <i className="fa-solid fa-plus"></i>
            <p className="counter">{item.quantity}</p>
            <i className="fa-solid fa-minus"></i>
          </div>
          <div className="item-container">
            <p>{item.item}</p>
            <p>${item.price}</p>
          </div>
          <div className="trash-container">
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      );
    });
  };

  return <div className="elements-container">{renderOrderItems()}</div>;
}

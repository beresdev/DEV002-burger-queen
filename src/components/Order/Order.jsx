function ProductsList ({products}) {
    return (
        <ul className="order-list">
            {
              products.map(product => {
                return <li key={product.id}>{product.quantity}: {product.item}</li>
                })
            }
        </ul>
    )
}

export function Order({orders}) {
    return orders.map((order) => (
        <div key={order.orderId} className="order-container">
            <p>Table: {order.table}</p>
            <ProductsList products={order.products}/>
            <p>Status: {order.status}</p>
        </div> 
    ))
}
export function Order({orders}) {
    return orders.map((order) => (
        <div key={order.orderId}>
            <p>{order.orderId}</p>
            <ul>
                {order.products.map(product => {
                    return (
                    <div>
                        <li key={product.id}>{product.item}</li>
                        <li>{product.quantity}</li>
                    </div>
                    )
                })}
            </ul>
        </div>
    ))
}
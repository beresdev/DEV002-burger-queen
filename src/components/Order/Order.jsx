import React from "react"

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

function ActionButtons({order, rol}) {
    if(rol === 'W') {
        if(order.status === 'READY') {
            return <button>DELIVERED</button>
        }
    } else if(rol === 'HC') {
        if(order.status === 'PENDIENTE') {
            return (
            <div>
                <button>CANCEL</button>
                <button>COOK</button>
            </div>
            )
        } else if(order.status === 'COOKING') {
            return <button>READY</button>
        }
    }

}

export function Order({orders, rol}) {
    return orders.map((order) => (
        <div key={order.orderId} className="order-container">
            <div>
                <p>{order.status}</p>
                <p>Table: {order.table}</p>
            </div>
            <ProductsList products={order.products}/>
            <ActionButtons order={order} rol={rol}/>
        </div> 
    ))
}
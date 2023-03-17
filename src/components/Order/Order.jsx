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

function ActionButtons({order, rol, fun}) {
    if(rol === 'W') {
        if(order.status === 'READY') {
            return <button onClick={(()=> fun(order.id, {status:'DELIVERED'}))}>DELIVERED</button>
        }
    } else if(rol === 'HC') {
        if(order.status === 'IN QUEUE') {
            // return <button onClick={(()=> fun({status:'COOKING'}))}>COOK</button>
            return <button onClick={(()=> fun(order.id, {status:'COOKING'}))}>COOK</button>
        } else if(order.status === 'COOKING') {
            return <button onClick={(()=> fun(order.id, {status:'READY'}))}>READY</button>
        }
    }
}

export function Order({orders, rol, functionUpdate}) {
    return orders.map((order) => (
        <div key={order.orderId} className="order-container">
            <div>
                <p>{order.status}</p>
                <p>Table: {order.table}</p>
            </div>
            <ProductsList products={order.products}/>
            <ActionButtons order={order} rol={rol} fun={functionUpdate}/>
        </div> 
    ))
}
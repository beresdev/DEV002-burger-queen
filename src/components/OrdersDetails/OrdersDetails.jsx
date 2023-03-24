export function OrdersDetails ({ orders, date }) {
  return (
    <div className='order-list-section'>
      {
          orders.map(order => { // eslint-disable-line
            if (order.status === 'DELIVERED' && order.createdAt.toDate().toLocaleDateString() === date) {
              const startTime = order.createdAt.toDate()
              const endTime = order.deliveredAt.toDate()
              const timeDiff = endTime.getTime() - startTime.getTime()
              const hours = Math.floor(timeDiff / 1000 / 60 / 60)
              const minutes = Math.floor((timeDiff / 1000 / 60) % 60)
              const seconds = Math.floor((timeDiff / 1000) % 60)
              const timeToD = `${hours}h ${minutes}m ${seconds}s`
              return (
                <ul key={order.orderId} className='list-container'>
                  <li>{order.orderId}</li>
                  <li>{order.createdAt.toDate().toLocaleTimeString()} </li>
                  <li>{order.cookingSince.toDate().toLocaleTimeString()}</li>
                  <li>{order.readyAt.toDate().toLocaleTimeString()}</li>
                  <li>{order.deliveredAt.toDate().toLocaleTimeString()}</li>
                  <li>{timeToD}</li>
                </ul>
              )
            }
          })
        }
    </div>
  )
}

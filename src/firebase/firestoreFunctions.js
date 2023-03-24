import {
  addDoc,
  serverTimestamp,
  colRef,
  onSnapshot,
  q,
  doc,
  db,
  updateDoc
} from './firestoreInit.js'

export const addOrder = async (orderId, email, table, products, total) => {
  try {
    await addDoc(colRef, {
      createdAt: serverTimestamp(),
      orderedBy: email,
      orderId,
      table,
      products,
      total,
      status: 'IN QUEUE'
    }).then(() => { alert('Orden enviada') }) // eslint-disable-line
  } catch (error) {
    console.log(error)
  }
}

export const onGetOrders = (callback) => onSnapshot(q, callback)

export const updateOrder = async (id, newContent) => {
  try {
    await updateDoc(doc(db, 'orders', id), newContent)
  } catch (error) {
    console.log(error)
  }
}

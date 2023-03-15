import { 
    addDoc,
    serverTimestamp,
    colRef,
    onSnapshot,
    q
} from './firestoreInit.js'

export const addOrder = async (orderId, table, products, total) => {
    try {
      await addDoc(colRef, {
        createdAt: serverTimestamp(),
        orderId: orderId,
        table: table,
        products: products,
        total: total,
        status: 'PENDIENTE'
      }).then(()=> {alert("Orden enviada");})
    } catch (error) {
      console.log(error);
    }
  };

  export const onGetOrders = (callback) => onSnapshot(q, callback);
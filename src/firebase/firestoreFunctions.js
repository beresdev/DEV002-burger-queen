import { 
    addDoc,
    serverTimestamp,
    colRef
} from './firestoreInit.js'

export const addOrder = async (orderId, table, products, total) => {
    try {
      await addDoc(colRef, {
        createdAt: serverTimestamp(),
        orderId: orderId,
        table: table,
        products: products,
        total: total,
        status: 1
      }).then(()=> {alert("Orden enviada");})
    } catch (error) {
      console.log(error);
    }
  };

  export const onGetPosts = (callback) => onSnapshot(q, callback);
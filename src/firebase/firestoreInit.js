import { app } from './firebaseInit.js'

import { getFirestore, serverTimestamp, addDoc, collection, query, orderBy, getDocs, onSnapshot, doc, getDoc, updateDoc } from 'firebase/firestore'

const db = getFirestore(app)
const colRef = collection(db, 'orders')
const q = query(colRef, orderBy('createdAt', 'desc'))

export {
  db,
  colRef,
  q,
  collection,
  query,
  orderBy,
  serverTimestamp,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  getDoc,
  updateDoc
}

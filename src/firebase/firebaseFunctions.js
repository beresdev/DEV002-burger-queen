import {
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

import { auth } from './firebaseInit.js'

export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.error(error)
  }
}

export const logout = () => { return signOut(auth) }

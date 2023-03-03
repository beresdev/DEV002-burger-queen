import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from 'firebase/auth'
  
  import { auth } from './firebaseInit.js'

  export const signIn = async(email, password) => { 
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("SingIn realizado", auth.currentUser)
    } catch(error) {
      console.error(error)
    }
  }

  export const logout = () => { return signOut(auth) };

  export const isUser = () => {onAuthStateChanged(auth, (user) => {
    if(user) {
        console.log(user);
        return user;
    } else {
      console.log('no usuario')
    }})};
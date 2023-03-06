import React from 'react';
import { Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebaseInit'
//import { isUser } from './firebase/firebaseFunctions';

export const ProtectedRoute = ({ children }) => {
  console.log("Entrando a protectedRoute")
 // const [user, setUser] = useState(false);
 //let user = false;
  //console.log("usuario al inicio",user);
  
  // const usr = isUser();

  // setUser(usr)

  // console.log(isUser())

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log(currentUser)
  //     user =  true;
  //     console.log(user)
  //   })
  //   return () => {
  //     unsubscribe()
  //   }
  // }, [])

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
      console.log('funciona');
      return {children}
    }
    console.log('Inicia sesión para acceder al menu')
    window.history.pushState({}, '', '#/')
    return <Navigate to='/' />
  })



  // if (user === '') {
  //   console.log('Inicia sesión para acceder al menu')
  //   window.history.pushState({}, '', '#/')
  //   return <Navigate to='/' />
  // }
  // console.log("usuario seteado", user)
  // return {children}
}

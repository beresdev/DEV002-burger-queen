import { firebaseConfig } from './firebaseConfig.js'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

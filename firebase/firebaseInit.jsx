import { firebaseConfig } from './firebaseConfig.js'
import { initializeApp } from "firebase/app";
export const app = initializeApp(firebaseConfig);
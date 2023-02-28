import { firebaseConfig } from './firebaseConfig.jsx';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

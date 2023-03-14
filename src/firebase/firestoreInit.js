import { app } from './firebaseInit.js';

import { getFirestore, serverTimestamp } from "firebase/firestore";

export const db = getFirestore(app);


export { serverTimestamp }


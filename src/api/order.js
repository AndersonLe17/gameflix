import { db } from './config';
import { collection, addDoc } from "firebase/firestore";

const orderRef = collection(db, 'orders');

export const addOrder = async (order) => {
    const orderDoc = await addDoc(orderRef, order);
    
    return orderDoc.id;
};

import { db } from './config';
import { collection, getDocs, getDoc, doc, query, where, writeBatch, increment } from "firebase/firestore";

const productsRef = collection(db, 'items');

export const capitalizeCase = (string) => {
  return string.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());;
};

export const getProducts = async (categoria) => {
  const products = [];
  
  const q = (categoria !== "all")? query(productsRef, where("categoria", "==", capitalizeCase(categoria)))
                                  : productsRef;
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id })
  });
  
  return products;
};

export const getProduct = async (productId) => {
  const document = doc(db, "items", productId);
  const docSnap = await getDoc(document);
  
  if (docSnap.exists()) {
    return {id: docSnap.id, ...docSnap.data()};
  }
  return null;
};

export const updateManyProducts = async (items) => {
  const batch = writeBatch(db);
  
  items.forEach(({id, qty}) => {
    const docRef = doc(db, "items", id);
    batch.update(docRef, {stock: increment(-qty)});
  });

  batch.commit();
};
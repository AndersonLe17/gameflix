import { db } from './config';
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

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
}

export const getProduct = async (productId) => {
  const document = doc(db, "items", productId);
  const docSnap = await getDoc(document);
  
  if (docSnap.exists()) {
    return {id: docSnap.id, ...docSnap.data()};
  }
  return null;
}
  
const products = [
  {
    id: 1,
    nombre: "Nintendo Switch Consola Modelo OLED Blanco",
    categoria: "Consolas",
    precio: 2399.90,
    stock: 12,
    imagen: "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/n/i/nintendo_switch_oled_blanco_3.jpg",
    descripcion: "La nueva consola Nintendo Switch modelo OLED cuenta con una vibrante pantalla OLED de 7 pulgadas (17.78 cm), un soporte ajustable y amplio, una base con puerto LAN para conexión por cable, almacenamiento interno de 64 GB y audio mejorado.",
  },
  {
    id: 2,
    nombre: "God of War Ragnarok (PS5)",
    categoria: "Juegos",
    precio: 379.90,
    stock: 50,
    imagen: "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/g/o/god_of_war_ragnarok_ps5.jpg",
    descripcion: "God of War Ragnarok: Desde Santa Monica Studio llega la secuela del aclamado por la crítica God of War (2018). Kratos y Atreus deberán viajar a cada uno de los nueve reinos en busca de respuestas para prepararse para la vaticinada batalla que acabará con el mundo.",
  },
  {
    id: 3,
    nombre: "Redragon Cobra M711 RGB Mouse - Blanco",
    categoria: "Perifericos",
    precio: 139.90,
    stock: 5,
    imagen: "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/1/0/1088594.jpg",
    descripcion: "El mouse Redragon Cobra cuenta con el balance perfecto entre ergonomía, peso y cantidad de botones. Sin lugar a dudas ¡es el preferido de muchos!",
  },
  {
    id: 4,
    nombre: "Razer Silla Gamer Iskur X - Negro/Verde",
    categoria: "Sillas Gamer",
    precio: 1679.90,
    stock: 11,
    imagen: "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/s/i/silla_2_2.jpg",
    descripcion: "Si el desempeño de juego sólido empieza por un soporte sólido, haz que la comodidad se convierta en tu ventaja gracias a la Razer Iskur X. Ha llegado la hora de descubrir lo que el soporte y la comodidad esencial pueden aportar a tu juego con una silla ergonómica para gamers diseñada para el juego intenso.",
  },
  {
    id: 5,
    nombre: "Funko Pop Marvel: Dead Strange",
    categoria: "Funkos",
    precio: 99.90,
    stock: 5,
    imagen: "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/f/u/funko_doctor_strange_dead_strange_gitd_1.jpg",
    descripcion: "Figura Funko Pop de Dead Strange (Glows in the Dark) de la película de Marvel Doctor Strange and the Multiverse of Madness.",
  },
  {
    id: 6,
    nombre: "Redragon Hylas H260 RGB Audífonos Blanco",
    categoria: "Audio",
    precio: 109.90,
    stock: 7,
    imagen: "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/1/0/1088588.jpg",
    descripcion: "Si a las suaves y acolchadas copas de los audífonos Redragon Hylas H260, le sumas la precisión de audio estéreo, no querrás quitártelos nunca. Los controladores direccionales de neodimio ofrecen una nitidez de sonido única, que se complementa perfectamente con su avanzado aislamiento de ruido pasivo.",
  }
];
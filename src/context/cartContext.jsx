import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, qty) => {
    const product = cart.find((p) => p.id === item.id);

    if (!product) return setCart([...cart, {...item, qty}])

    const i = cart.findIndex((p) => p.id === item.id);

    cart[i].qty = ((cart[i].qty + qty) > cart[i].stock)? cart[i].stock : cart[i].qty + qty;

    setCart(cart);
  };

  const removeProduct = (id) => setCart(cart.filter(p => p.id !== id));

  const changeQtyProduct = (id, qty) => {
    const i = cart.findIndex((p) => p.id === id);
    cart[i].qty = qty;
    
    setCart(cart);
  }

  const getCartQty = () => cart.length;

  const getTotal = () => cart.reduce((acc, p) => acc + p.precio * p.qty, 0);

  const clear = () => setCart([]);

  const value = {
    cart,
    addProduct,
    removeProduct,
    changeQtyProduct,
    getCartQty,
    getTotal,
    clear
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

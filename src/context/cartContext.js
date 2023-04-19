import { createContext, useState, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [items, setItems, { removeItem }] = useLocalStorageState("items", []);
  const getProducts = (products) => {
    setItems(products);
  };

  const value = {
    getProducts,
    products,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

import { createContext, useState } from "react";
export const CarritoContext = createContext();
export function CarritoProvider({ children }) {
  const [carritoItems, setCarritoItems] = useState([]);
  const agregarAlCarrito = (producto) => {
    setCarritoItems((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const vaciarCarrito = () => setCarritoItems([]);
  const borrarProductoCarrito = (id) =>
    setCarritoItems((prev) => prev.filter((item) => item.id !== id));
  const aumentarCantidad = (id) => {
  setCarritoItems((items) =>
    items.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    )
  );
};

const disminuirCantidad = (id) => {
  setCarritoItems((items) =>
    items.map((item) =>
      item.id === id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    )
  );
};
  return (
    <CarritoContext.Provider
      value={{ carritoItems, agregarAlCarrito, vaciarCarrito, borrarProductoCarrito, aumentarCantidad, disminuirCantidad }}>{children}</CarritoContext.Provider>
  );
}
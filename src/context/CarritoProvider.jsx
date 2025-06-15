import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

export const CarritoProvider = ({ children }) => {
  const initialState = [];

  const productosReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "AGREGAR PRODUCTO":
        return [...state, action.payload];
      case "QUITAR PRODUCTO":
        return state.filter((producto) => producto.id !== action.payload);
      case "AUMENTAR PRODUCTO":
        return state.map((producto) => {
          if (producto.id === action.payload) {
            return { ...producto, cantidad: producto.cantidad + 1 };
          }
          return producto;
        });
      case "DISMINUIR PRODUCTO":
        return state.map((producto) => {
          if (producto.id === action.payload && producto.cantidad > 1) {
            return { ...producto, cantidad: producto.cantidad - 1 };
          }
          return producto;
        });

      default:
        return state;
    }
  };
  const [listaProductos, dispatch] = useReducer(productosReducer, initialState);
  const agregarProducto = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "AGREGAR PRODUCTO",
      payload: compra,
    };
    dispatch(action);
  };
  const quitarProducto = (id) => {
    const action = {
      type: "QUITAR PRODUCTO",
      payload: id,
    };
    dispatch(action);
  };
  const aumentarProducto = (id) => {
    const action = {
      type: "AUMENTAR PRODUCTO",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirProducto = (id) => {
    const action = {
      type: "DISMINUIR PRODUCTO",
      payload: id,
    };
    dispatch(action);
  };
  return (
    <CarritoContext.Provider
      value={{
        agregarProducto,
        listaProductos,
        quitarProducto,
        aumentarProducto,
        disminuirProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

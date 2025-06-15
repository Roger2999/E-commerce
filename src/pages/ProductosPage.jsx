import { useContext, useState } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { SearchContext } from "../context/SearchContext";
import { Card } from "../components/Card";
import { CarritoContext } from "../context/CarritoContext";
import { SelectBar } from "../components/SelectBar";
import "../styles/ProductosPage.css";

export const ProductosPage = () => {
  const { productos } = useContext(ProductosContext);
  const { buscador } = useContext(SearchContext);
  const categorias = [
    ...new Set(productos.map((producto) => producto.categoria)),
  ];
  const [categoria, setCategoria] = useState("todos");
  const {
    agregarProducto,
    quitarProducto,
    aumentarProducto,
    disminuirProducto,
    listaProductos,
  } = useContext(CarritoContext);
  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(buscador.toLowerCase()) &&
      (categoria === "todos" || categoria === producto.categoria)
  );
  const enCarrito = (id) => {
    return listaProductos.some((producto) => producto.id === id);
  };
  const handleAgregar = (compra) => {
    agregarProducto(compra);
  };
  const handleQuitar = (id) => {
    quitarProducto(id);
  };
  const handleAumentar = (id) => {
    aumentarProducto(id);
  };
  const handleDisminuir = (id) => {
    disminuirProducto(id);
  };
  return (
    <>
      <h1>Nuestros Productos:</h1>

      <SelectBar
        categorias={categorias}
        categoria={categoria}
        setCategoria={setCategoria}
      />

      <div className="container-flex-center">
        <div className="container-boxes">
          {productosFiltrados.map((producto) => (
            <div className="container-box" key={producto.id}>
              <Card
                id={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                marca={producto.marca}
                handleAgregar={() => handleAgregar(producto)}
                handleQuitar={() => handleQuitar(producto.id)}
                enCarrito={enCarrito(producto.id)}
                handleAumentar={() => handleAumentar(producto.id)}
                handleDisminuir={() => handleDisminuir(producto.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

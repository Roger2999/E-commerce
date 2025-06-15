import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../styles/Card.css";

const imagenesProductos = {
  1: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // CPU
  2: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308", // GPU
  3: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1b", // RAM
  4: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // SSD
  5: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // Teclado
  6: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // Placa base
  7: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // Laptop
  8: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // Refrigeración
  9: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // Fuente
  10: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // Monitor
};

export const Card = ({
  id,
  nombre,
  precio,
  marca,
  handleAgregar,
  handleQuitar,
  handleAumentar,
  handleDisminuir,
  enCarrito,
}) => {
  const { listaProductos } = useContext(CarritoContext);
  const productoEnCarrito = listaProductos.find(
    (producto) => producto.id === id
  );
  const cantidad = enCarrito ? productoEnCarrito.cantidad : 1;
  return (
    <div
      className="card"
      style={{
        margin: "10px auto", // centra horizontalmente
      }}
    >
      <img
        src={
          imagenesProductos[id] ||
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        }
        className="card-img-top"
        alt={nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{marca}</p>
        <p className="card-text">{precio}</p>
      </div>
      {enCarrito ? (
        <>
          <div className="separator-button">
            <button className="btn btn-danger" onClick={handleQuitar}>
              Quitar del carrito
            </button>
          </div>
          <div className="cantidad-container">
            <div className="buttons-container">
              <button className="btn btn-ouline" onClick={handleDisminuir}>
                -
              </button>
              <button className="btn btn-primary">{cantidad}</button>
              <button className="btn btn-ouline" onClick={handleAumentar}>
                +
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="agregar-container">
          <button className="btn btn-primary" onClick={handleAgregar}>
            Agregar al carrito
          </button>
        </div>
      )}
    </div>
  );
};

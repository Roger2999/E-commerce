import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { CheckoutForm } from "../components/CheckoutForm";

export const CarritoPage = () => {
  const {
    listaProductos,
    quitarProducto,
    aumentarProducto,
    disminuirProducto,
  } = useContext(CarritoContext);

  const totalCompra = listaProductos
    .reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
    .toFixed(2);

  const handleCheckout = (data) => {
    alert(
      `¡Gracias por tu compra, ${data.nombre}!\nDirección: ${data.direccion}\nTeléfono: ${data.telefono}`
    );
    // Aquí podrías limpiar el carrito o enviar los datos al backend
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto) => (
            <tr key={producto.id} style={{ textAlign: "center" }}>
              <th scope="row" style={{ textAlign: "start" }}>
                {producto.nombre}
              </th>
              <td>{producto.precio}</td>
              <td>
                <button
                  className="btn btn-ouline"
                  onClick={() => disminuirProducto(producto.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{producto.cantidad}</button>
                <button
                  className="btn btn-ouline"
                  onClick={() => aumentarProducto(producto.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => quitarProducto(producto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {listaProductos == 0 && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div
        className="total-container"
        style={{
          maxWidth: "250px",
          margin: "auto",
          borderStyle: "groove",
          borderRadius: "10px",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <h4>Precio total: ${totalCompra}</h4>
      </div>
      <CheckoutForm onSubmit={handleCheckout} />
    </>
  );
};

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CarritoContext } from "../context/CarritoContext";

export const CheckoutForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { listaProductos } = useContext(CarritoContext);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 400, margin: "2rem auto" }}
    >
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          id="nombre"
          className="form-control"
          {...register("nombre", { required: "El nombre es obligatorio" })}
        />
        {errors.nombre && (
          <span className="text-danger">{errors.nombre.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">
          Email
        </label>
        <input
          id="direccion"
          className="form-control"
          type="email"
          {...register("direccion", {
            required: "La dirección es obligatoria",

            maxLength: {
              value: 50,
              message: "La dirección no puede superar los 50 caracteres",
            },
            pattern: {
              value: /^[A-Za-z0-9@.]+$/,
              message: "Email no valido",
            },
            validate: {
              tieneArroba: (value) =>
                value.includes("@") ||
                "La dirección debe contener el carácter @",
            },
          })}
        />
        {errors.direccion && (
          <span className="text-danger">{errors.direccion.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>
        <input
          id="telefono"
          className="form-control"
          {...register("telefono", {
            required: "El teléfono es obligatorio",
            pattern: {
              value: /^\d{10}$/,
              message: "El teléfono debe tener 10 dígitos",
            },
          })}
        />
        {errors.telefono && (
          <span className="text-danger">{errors.telefono.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-success w-100"
        disabled={listaProductos < 1}
      >
        Finalizar compra
      </button>
    </form>
  );
};

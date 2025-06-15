import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
export const NavBar = () => {
  const { listaProductos } = useContext(CarritoContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mt-1">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/carrito">
                  <button type="button" className="btn btn-primary">
                    Carrito{" "}
                    <span className="badge bg-secondary">
                      {listaProductos.length}
                    </span>
                  </button>
                </NavLink>
              </li>
              <li className="nav-item mt-2">
                <SearchBar />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

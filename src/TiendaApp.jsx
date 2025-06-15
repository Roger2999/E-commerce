import { Navigate, Route, Routes } from "react-router-dom";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosPage } from "./pages/ProductosPage";
import { NavBar } from "./components/NavBar";
import { ProductosProvider } from "./context/ProductosProvider";
import { SearchProvider } from "./context/SearchProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const TiendaApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <SearchProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductosPage />} />
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </SearchProvider>
      </CarritoProvider>
    </ProductosProvider>
  );
};

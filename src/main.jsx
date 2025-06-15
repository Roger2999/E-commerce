import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TiendaApp } from "./TiendaApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <TiendaApp />
    </StrictMode>
  </BrowserRouter>
);

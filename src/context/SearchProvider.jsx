import { useState } from "react";
import { SearchContext } from "./SearchContext";

export const SearchProvider = ({ children }) => {
  const [buscador, setBuscador] = useState("");
  return (
    <SearchContext.Provider value={{ buscador, setBuscador }}>
      {children}
    </SearchContext.Provider>
  );
};

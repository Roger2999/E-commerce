import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const SearchBar = () => {
  const { buscador, setBuscador } = useContext(SearchContext);

  return (
    <>
      <form
        className="d-flex"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={buscador}
          onChange={(e) => setBuscador(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

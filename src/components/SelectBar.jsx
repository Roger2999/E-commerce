export const SelectBar = ({ categoria, setCategoria, categorias }) => {
  const onSelectChange = (e) => {
    setCategoria(e.target.value);
  };
  return (
    <>
      <form>
        <label htmlFor="categorias">
          Categorias:
          <select
            className="form-select"
            name="categorias"
            id="categorias"
            value={categoria}
            onChange={onSelectChange}
          >
            <option value="todos">Todos</option>
            {categorias.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </form>
    </>
  );
};

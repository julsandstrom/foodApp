import { useState, useEffect, useRef } from "react";
import FetchData from "./FetchData";
const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Search Meals</label>
        <input
          ref={inputRef}
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </form>
      <FetchData inputSearch={inputSearch} />
    </div>
  );
};

export default Search;

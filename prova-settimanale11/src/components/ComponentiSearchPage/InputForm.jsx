import React from "react";
import { useDispatch } from "react-redux";
import { getSearchResults } from "../../slice/chiamataSearchSlice";
import { useState, useEffect } from "react";

export default function InputForm() {
  const dispatch = useDispatch();
  let [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSearchResults(query));
  }
  return (
    <>
      <form
        className="input-group mb-3 w-50 ms-3"
        id="search"
        onSubmit={handleSubmit}
      >
        <button
          className="btn btn-outline-secondary rounded-start-pill searchInp border border-white btnInput"
          type="button"
          id="button-addon1"
        >
          <i className="bi bi-search" />
        </button>
        <input
          type="search"
          className="form-control rounded-end-pill searchInp text-white"
          placeholder="Cosa vuoi ascoltare?"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
}

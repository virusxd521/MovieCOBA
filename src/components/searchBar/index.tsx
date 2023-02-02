import React, { useState, useEffect } from "react";
import { useMovie } from "../../context";

const SearchBar: React.FC = () => {
  const { state, dispatch } = useMovie();
  const { movies } = state;
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setSearchQuery('')
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    setTimeout(() => {
      if (newQuery !== "") {
        const newFilteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(newQuery.toLowerCase()));
        dispatch({ type: 'setFilteredMovies', payload: newFilteredMovies });
      }
    }, 600)
  };

  return (
    <input type='text' value={searchQuery} onChange={handleChange} />
  );
};

export default SearchBar;
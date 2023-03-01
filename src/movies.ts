import { Dispatch } from 'react';

interface Movie {
  title: string;
  director: string;
  genre: string;
  year: number;
  id: string;
}

type ActionType = {
  type: string;
  payload: Movie[];
};

const getMovieList = async (genre: string, dispatch: Dispatch<ActionType>) => {
  try {
    const response = await fetch(`https://api.sampleapis.com/movies/${genre}`);
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: 'setMovies', payload: data });
    } else {
      throw new Error('Server communication error');
    }
  } catch (error) {
    alert('Server communication error. Please, check internet connection.');
  }
};

export { getMovieList };

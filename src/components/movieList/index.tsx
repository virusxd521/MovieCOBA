import React, { useEffect } from 'react';
import './style.css';
import { getMovieList } from '../../movies';
import { useMovie } from '../../context';
import Movie from '../movie/index';

interface MovieListProps {
  genre: string;
}

const MovieList: React.FC<MovieListProps> = ({ genre }) => {
  const { state, dispatch } = useMovie();
  console.log(state, 'dfdsfds');

  useEffect(() => {
    getMovieList(genre, dispatch);
  }, [genre, dispatch]);

  return (
    <div className="movie-list-box">
      {state.movies ? (
        state.movies.map((movie) => (
          <Movie
            key={genre + '_' + movie.id}
            id={movie.id}
            title={movie.title}
            posterURL={movie.posterURL}
            genre={genre}
          />
        ))
      ) : (
        <p>Sorry, no movie is now available in this category.</p>
      )}
    </div>
  );
};

export default MovieList;

import React from 'react';
import './style.css';
import Check from '../check/index';
import { useMovie } from '../../context';

interface Props {
  id: number;
  title: string;
  posterURL: string;
  genre: string;
};

const Movie: React.FC<Props> = ({ id, title, posterURL, genre }) => {
  const { state, dispatch } = useMovie();
  const { checkedMovies } = state;

  const handleOnCheck = () => {
    dispatch({
      type: 'updateSelectedMovie',
      payload: {
        id,
        isSelect: !checkedMovies[title],
        title,
        genre,
        posterURL,
      },
    });
  };

  return (
    <div id={'movie_' + id} className="movie-box">
      <div className="col-2">
        <img alt={title} src={posterURL} />
      </div>
      <div className="col-6">
        <label className="movie-title">{title}</label>
      </div>
      <div className="movie-button">
        <Check title={title} onCheck={handleOnCheck} />
      </div>
    </div>
  );
};

export default Movie;

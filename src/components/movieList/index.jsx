import React, { useEffect, useState } from 'react';
import './style.css';
import {getMovieList} from '../../movies.js';
import Movie from '../movie/index';

const MovieList=({genre})=>{
    const [movies, setMovies] = useState(null);

    useEffect(()=>{
        getMovieList(genre, setMovies);
    },[genre]);

    return(
        <div className="movie-list-box">
            {
                movies ? movies.map(
                    (movie)=><Movie key={genre+"_"+movie.id} id={movie.id} title={movie.title} posterURL={movie.posterURL} genre={genre}/>
                ) : <p>Sorry, no movie is now available in this category.</p>
            }
        </div>
    );
}

export default MovieList;
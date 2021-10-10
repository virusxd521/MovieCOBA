import React from 'react';
import './style.css';
import Movie from '../movie/index';

const MovieList=({movies})=>{
    return(
        <div className="movie-list-box">
            {
                movies.map(
                    (movie)=><Movie key={movie.id} {...movie}/>
                )
            }
        </div>
    );
}

export default MovieList;
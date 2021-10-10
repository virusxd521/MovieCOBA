import React from 'react';
import './style.css';
import Actor from '../actor/index';

const Movie = ({id, title, poster, year, rating, director, genre, cast}) => {

    return (
        <div id={'movie_'+id} className="movie-box">
            <div className="col-2">
                <div className="movie-rating"><b>{rating+"/10"}</b></div>
                <img alt={title} src={'./assets/'+poster}/>
            </div>
            <div className="col-6 right">
                <h3 className="movie-title">{title}</h3>
                <div className="movie-propertiies">
                    <p><b>Rok vydaní: </b>{year}</p>
                    <p><b>Žánr: </b>{genre}</p>
                    <p><b>Režie: </b>{director}</p>
                </div>
                <div className="movie-cast">
                    <h4 className="movie-title">V hlavních rolích:</h4>
                    <div className="movie-cast-box">
                        {
                            cast.map((actor)=><Actor key={actor.name} {...actor}/>)
                        }
                    </div>
                </div>               
            </div>           
        </div>
    );
};

export default Movie;
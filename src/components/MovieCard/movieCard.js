import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieCard/movieCard.scss'
const MovieCard = (props) => {
    const {data} = props;
    return (
        <div className="carditem">
            <Link to= {`/movie/${data.imdbID}`}>
                <div className="card-item">
                    <div className="card-img">
                        <img src={data.Poster} alt={data.Title}></img>
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h6>{data.Title}</h6>
                            <p>{data.Year}</p>
                        </div>
                    </div>
                </div>
            </Link>    
        </div>
    );
};

export default MovieCard;
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries, selectLoading } from '../../features/movies/moviesSlice';
import MovieCard from '../MovieCard/movieCard';
import '../MovieListing/movieListing.scss';
import Slider from "react-slick";
import {Settings} from '../setting';
import { Spinner } from "react-bootstrap";

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllSeries);
    const isLoading = useSelector(selectLoading);
    let renderMovies = '';
    let renderSeries = '';
    renderMovies = 
    movies.Response === 'True' ? (
        movies.Search.map((movie , index) => (
                <MovieCard key={movie.imdbID} data={movie} />
    
        ))
    ) : 
    (
    <div className="movies-error">
        <h3>{movies.error}</h3>
    </div>
    )
    renderSeries = 
    series.Response === 'True' ? (
        series.Search.map((ser , index) => (
                
                <MovieCard key={ser.imdbID} data={ser} />
    
        ))
    ) : 
    (
    <div className="movies-error">
        <h3>{movies.error}</h3>
    </div>
    )
    debugger;
    if(isLoading){
        return (
        <div className="spinner">    
             <Spinner animation="border" variant="info" />
        </div>
        )
    }
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...Settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className="movie-list">
                <h2>Series</h2>
                <div className="movie-container">
                <Slider {...Settings}>{renderSeries}</Slider>
                </div>
            </div>
        </div>
        
    );
};

export default MovieListing;
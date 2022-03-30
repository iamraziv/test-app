import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/movieListing'
import banner from '../../images/banner.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncSeries} from '../../features/movies/moviesSlice'
const Home = (props) => {
    const movieTest = "Harry";
    const seriesTest = "Friends";
    const dispatch = useDispatch();
    useEffect(()=>{
         dispatch(fetchAsyncMovies(movieTest));
         dispatch(fetchAsyncSeries(seriesTest));
     }, [dispatch]);

    return (
        <div>
            <div className="banner-img">
            </div>
            <MovieListing />
        </div>
    );
};

export default Home;
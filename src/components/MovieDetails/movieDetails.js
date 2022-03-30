import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {getMovieorShowDetail, fetchAsyncMovieOrShowDetail, reset} from '../../features/movies/moviesSlice';
import '../MovieDetails/movieDetails.scss';
import { Rating } from '@mui/material';


const MovieDetails = (props) => {
  debugger;
    const {imdbID} = useParams();
    const dispatch = useDispatch()
    const data = useSelector(getMovieorShowDetail);
    const {imdbRating} = data;
    let rate = parseFloat(imdbRating/2);
    useEffect(()=>{
            dispatch(fetchAsyncMovieOrShowDetail(imdbID))
            return () => dispatch(reset());
    }, [imdbID, dispatch])
    
    return (
        <>
            <div class="sub-header">
                <p><span className="title">{data.Title}</span> <span className="rated">{data.Rated}</span></p>
            </div>
            <div class="col-12 plot">
                {data.Plot}
            </div>

<div class="row">
  <div class="col-6 menu">
    <ul>
      <li><span class="material-icons">calendar_month</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{data.Year}</span></li>  
      <li> <span><Rating name="customized-10" value={rate} precision={0.5} /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{data.imdbRating}</span></li>
      <li> <span class="material-icons">thumb_up</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{data.imdbVotes}</span></li>
      <li><span class="material-icons">calendar_month</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{data.DVD}</span></li>  
      
      <li>Director : <span>{data.Director}</span></li>  
      <li>Actors: <span>{data.Actors}</span></li>
      <li>Genre : <span>{data.Genre}</span></li>
      <li>Language : <span>{data.Language}</span></li>
      <li>Awards : <span>{data.Awards}</span></li>
      <li>Runtime : <span>{data.Runtime}</span></li>
    </ul>
  </div>

  <div class="col-6 poster">
    <img src={data.Poster} alt={data.Title} />
  </div>
</div>
        </>
     
        // <div className="movie-section">
        //     <div className="section-left">
        //         <div className="moviedetail-title">
        //             <h2>{data.Title}</h2>
        //         </div>
        //         <div className="moviedetail-rating">
        //             {/* <Icon>star</Icon> */}
                    
        //             <span>{data.imdbRating} <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></span>
        //             <span>{data.imdbVotes} <Icon>ThumbUpAltRounded</Icon></span>
        //             <span>{data.Metascore}</span>
        //             <span>{data.Rated}</span>
        //             <span>{data.Year}</span>
        //         </div>
        //         <div className="moviedetail-plot">
        //             <p>{data.Plot}</p>
        //         </div>
        //         <div className="moviedetail-section-list">
        //             <p>Director : {data.Director}</p>
        //             <p>Actors : {data.Actors}</p>
        //             <p>Genre : {data.Genre}</p>
        //             <p>Language : {data.Language}</p>
        //             <p>Awards : {data.Awards}</p>
        //             <p>Runtime : {data.Runtime}</p>         
        //         </div>
        //     </div>
        //     <div className="section-right">

        //     </div>

            
        // </div>
    );
};

export default MovieDetails;
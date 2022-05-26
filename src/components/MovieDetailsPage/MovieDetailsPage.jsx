import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";

import {fetchMovieId} from '../Api/Fetch';

// // import styles from './components/Navigation/Navigation.module.css';

export default function MovieDetailsPage (){
    const { movieId } = useParams();
    const [title, setTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [date, setDate] = useState('');
    const [genres, setGenres] = useState('');
    const [poster, setPoster] = useState('');
    const [userScore, setUserScore] = useState('');
    
    function createListOfGenres (genres){
        const genresList = [];
        genres.map(genre=>{
            genresList.push(genre.name);
            return genresList;
        })
        return genresList;
    }
    
    useEffect(()=>{
        fetchMovieId(movieId).then(data=>{
            setTitle(data.original_title);
            setOverview(data.overview);
            setDate(data.release_date.slice(0, 4));
            setGenres(createListOfGenres(data.genres));
            setPoster(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
            setUserScore(data.vote_average);
        });
    },[movieId]);

    return(
        <div>
        <button type="button">Go back</button>
        <div>
            <img src={poster} alt={title}></img>

            <div>
                <h1>{title} ({date})</h1>
                <p>User Score: {userScore}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
            </div>
        </div>
        <hr></hr>
        <p>Additional information</p>
        <Link to={`/movies/:movieId/cast`}>Cast</Link>
        <Link to={`/movies/:movieId/reviews`}>Reviews</Link>
        <hr></hr>
        </div>
                
    );
    
}
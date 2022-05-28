import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import {fetchTrendingMovie} from '../Api/Fetch';

import styles from '../HomePage/HomePage.module.css';

export default function HomePage (){
    const [movies, setMovies] = useState(null);
    useEffect(()=>{
        fetchTrendingMovie().then(data=>setMovies(data.results));
    },[]);

    return(
        <>
        <p className={styles.title}>Trending today</p>
            {movies&&(
            <ul>
                {movies.map(movie=>(
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul> 
            )}
        </>
                
    );
    
}

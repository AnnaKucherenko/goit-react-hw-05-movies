import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {fetchMovieCredits} from '../Api/Fetch';

// // import styles from './components/Navigation/Navigation.module.css';

export default function MovieDetailsPage (){
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    

    useEffect(()=>{
        fetchMovieCredits(movieId).then(data=>setCast(data.cast));
    },[movieId]);

    
    return(
        <>
            {cast&&(
            <ul>
                {cast.map(role=>(
                    <li key={role.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${role.profile_path}`} alt={role.name}></img>
                        <p>{role.name}</p>
                        <p>Character:{role.character}</p>
                    </li>
                ))}
            </ul> 
            )}
        </>
         
    );
    
}
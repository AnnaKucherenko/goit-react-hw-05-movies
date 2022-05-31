import React, {  useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {fetchMovieCredits} from '../Api/Fetch';
import defaultImg from '../errorImg.jpg';
import styles from '../Cast/Cast.module.css';

export default function MovieDetailsPage (){
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    
    useEffect(()=>{
        fetchMovieCredits(movieId).then(data=>{
            setCast(data.cast);
            
        });
    },[movieId]);
    
    return(
        <>
            {cast&&(
            <ul>
                {cast.map(item=>(
                    
                    <li key={item.id}>
                        <img className={styles.roleImg} src= {item.profile_path ? (`https://image.tmdb.org/t/p/w500${item.profile_path}`) : (defaultImg)} alt={item.name}></img>
                        <p>{item.name}</p>
                        <p>Character:{item.character}</p>
                    </li>
                ))}
            </ul> 
            )}
        </>
         
    );
    
}
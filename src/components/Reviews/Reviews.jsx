import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {fetchMovieReviews} from '../Api/Fetch';

// // import styles from './components/Navigation/Navigation.module.css';

export default function MovieDetailsPage (){
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    

    useEffect(()=>{
        fetchMovieReviews(movieId).then(data=>setReviews(data.results));
    },[movieId]);
        
    return(
        <>
            {reviews&&(
            <ul>
                {reviews.map(review=>(
                    <li key={review.author_details.username}>
                        <p>Author:{review.author}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul> 
            )}
        </>
         
    );
    
}
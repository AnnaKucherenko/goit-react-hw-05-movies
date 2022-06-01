import React, {  useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import {fetchSearchMovies} from '../Api/Fetch';
import Searchbar from "../SearchBar/SearchBar";

export default function MoviesPage (){
    const location = useLocation();
    const [query,setQuery] = useState('');
    const [movies, setMovies] = useState(null);
        
    const handleSearch = evt => {
        setQuery(evt.target.value.toLowerCase());
    };

    const handleSubmit = evt=>{
        evt.preventDefault();
        if(query.trim()===''){
            alert('Введите запрос');
            return;
        }
        setQuery(query);
        location.search=query;
        fetchSearchMovies(query).then(data=>setMovies(data.results));
        
    };

    
    useEffect(()=>{
           
        if(location.search){
            fetchSearchMovies(location.search).then(data=>setMovies(data.results));
        }
        
    },[location.search]);

    return(
        <>
            <Searchbar onSubmit={handleSubmit} onChange={handleSearch} value={query}/>
            {movies&&(
            <ul>
                {movies.map(movie=>(
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={location}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul> 
            )}
        </>
                
    );
    
}

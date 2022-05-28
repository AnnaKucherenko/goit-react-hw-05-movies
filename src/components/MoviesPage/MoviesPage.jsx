import React, {  useState } from "react";
import { Link } from "react-router-dom";
import {fetchSearchMovies} from '../Api/Fetch';
import Searchbar from "../SearchBar/SearchBar";


export default function MoviesPage (){
    const [query,setQuery] = useState('');
    const [movies, setMovies] = useState(null);
        
    const handleSearch = evt => {
        setQuery(evt.target.value.toLowerCase())
    };

    const handleSubmit = evt=>{
        evt.preventDefault();
        if(query.trim()===''){
            alert('Введите запрос');
            return;
        }
        setQuery(query);
        fetchSearchMovies(query).then(data=>setMovies(data.results));
        setQuery('');
        
    };

    return(
        <>
            <Searchbar onSubmit={handleSubmit} onChange={handleSearch} value={query}/>
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

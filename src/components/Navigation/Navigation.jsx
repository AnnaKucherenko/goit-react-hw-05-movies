import React from "react";
import { NavLink } from "react-router-dom";
// import styles from './components/Navigation/Navigation.module.css';

export default function Navigation (){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        
        </nav>
    )
    
}

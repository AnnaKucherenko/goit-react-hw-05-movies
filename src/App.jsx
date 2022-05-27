import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import HomePage from './components/HomePage/HomePage';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
  
export default function App () {
      
    return (
      <div>
        <Navigation/>

        
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route  path="/movies/:movieId" element={<MovieDetailsPage/>}>
            <Route path="/movies/:movieId/cast" element={<Cast/>}></Route>
            <Route path="/movies/:movieId/reviews" element={<Reviews/>}></Route>
          </Route>
          
        </Routes>
        
      </div>
    ); 
  
};



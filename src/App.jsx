import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import HomePage from './components/HomePage/HomePage';

  
export default function App () {
      
    return (
      <div>
        <Navigation/>

        
        <Routes>
          <Route index path="/" element={<HomePage/>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage/>}></Route>
        </Routes>
        
      </div>
    ); 
  
};



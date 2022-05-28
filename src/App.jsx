import React  from 'react';
import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
  
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("./components/MovieDetailsPage/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

export default function App () {
      
    return (
      <div>
        <Navigation/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route  path="/movies/:movieId" element={<MovieDetailsPage/>}>
              <Route path="/movies/:movieId/cast" element={<Cast/>}></Route>
              <Route path="/movies/:movieId/reviews" element={<Reviews/>}></Route>
            </Route>
            <Route path="/movies" element={<MoviesPage/>}></Route>
          </Routes>
        </Suspense>
                
      </div>
    ); 
  
};



import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";
import {Card} from 'semantic-ui-react'

const MovieList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <div className="row rounded movies" style={{backgroundColor:"#3B3B3B"}}>{movieCards}</div>;
};
export default MovieList;
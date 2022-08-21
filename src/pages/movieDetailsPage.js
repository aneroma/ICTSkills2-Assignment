import React, {useState, useEffect}  from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import {getMovie} from '../api/tmdb-api'
import { Link, Route, withRouter } from "react-router-dom"
import MovieReviews from "../components/movieReviews"
import {Button, Container,Divider } from 'semantic-ui-react'

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
        <ActorsView movie={movie}  {...props}/>
          <Container textAlign="center">
          <Divider horizontal><span><h2>Reviews</h2></span></Divider>
            {!props.history.location.pathname.endsWith("/reviews") ? (
              
              <Link
                to={`/movies/${id}/reviews`}
              >
              <Button inverted color='olive'>
              Show Reviews (Extracts)
              </Button>
              </Link>
              
            ) : (
              <Link
                to={`/movies/${id}`}
              >
              <Button inverted color='olive'>
                Hide Reviews 
              </Button>
              </Link>
            )}
          </Container>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};
export default withRouter(MoviePage);
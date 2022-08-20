import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";


const ReviewFormPage = props => {

  return (
      <PageTemplate movie={props.location.state.movie}>
          <ReviewForm movie={props.location.state.movie} />
      </PageTemplate>
  );
};
export default ReviewFormPage; 
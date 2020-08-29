import React from "react";
import { Link } from "@reach/router";
import PropTypes from 'prop-types'
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, clickable, movieId, movieName }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <span className="movieStats">
          <img className="clickable" src={image} alt={`Watch Online ${movieName}`} />
          <div className="movieName">{movieName}</div>
        </span>
      </Link>
    ) : (
      <img src={image} alt="imagethumb" />
    )}
  </StyledMovieThumb>
);

MovieThumb.propTypes = {
  image: PropTypes.string,
  clickable: PropTypes.bool,
  movieId: PropTypes.number,
  movieName: PropTypes.string
}
export default MovieThumb;

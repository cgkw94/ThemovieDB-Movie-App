import React from "react";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";
import "./MovieInfo-module.css";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../Configs";

const MovieInfo = (props) => {
  return (
    <div
      className="movie-info-container"
      style={{
        background: props.movie.backdrop_path
          ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}/${props.movie.backdrop_path})`
          : "#000",
      }}
    >
      <div className="movie-info-content">
        <div className="movie-info-thumbnail">
          <MovieThumbnail movie={props.movie} />
        </div>
        <div className="movie-info-text">
          <h1>{props.movie.title}</h1>
          <h3>OVERVIEW</h3>
          <p>{props.movie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className="rating">
            <meter
              min="0"
              max="100"
              optimum="100"
              low="30"
              high="70"
              value={props.movie.vote_average * 10}
            />
            <p className="score">{props.movie.vote_average}</p>
          </div>
          {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
          {props.directors.map((data) => {
            return <p className="director">{data.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Actors from "../Actors/Actors";
import MovieInfo from "../MovieInfo/MovieInfo";
import styles from "./MovieDetails.module.css";
import MovieInfoExtend from "../MovieInfoExtend/MovieInfoExtend";
import Header from "../Header/Header";

const MovieDetails = () => {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);

  const fetchMovieDetails = async (url) => {
    setLoading(true);

    const res = await fetch(url);
    const data = await res.json();
    setMovieDetails(data);

    setLoading(false);
  };

  const fetchCreditDetails = async (url) => {
    setLoading(true);

    const res = await fetch(url);
    const data = await res.json();

    const directors = data.crew.filter((crew) => crew.job === "Director");

    setDirectors(directors);
    setActors(data.cast);

    setLoading(false);
  };

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=1ada12e72311ae951cf663b616d5c520&language=en-US`;

    fetchMovieDetails(movieUrl);
  }, []);

  //fetch actors and directors
  useEffect(() => {
    const creditsUrl = `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=1ada12e72311ae951cf663b616d5c520&language=en-US`;

    fetchCreditDetails(creditsUrl);
  }, []);

  return (
    <div>
      <Header />
      <h1>
        <Link exact to="/">
          Back
        </Link>{" "}
        / {movieDetails.original_title}
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MovieInfo movie={movieDetails} directors={directors} />
          <MovieInfoExtend
            runtime={movieDetails.runtime}
            budget={movieDetails.budget}
            revenue={movieDetails.revenue}
          />
          <h1>Casts</h1>
          <Actors actors={actors} />
        </>
      )}
    </div>
  );
};

export default MovieDetails;

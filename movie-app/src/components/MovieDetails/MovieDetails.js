import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Actors from "../Actors/Actors";
import MovieInfo from "../MovieInfo/MovieInfo";
import styles from "./MovieDetails.module.css";
import MovieInfoExtend from "../MovieInfoExtend/MovieInfoExtend";
import Header from "../Header/Header";
import { API_URL, API_KEY } from "../../Configs";

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
    const movieUrl = `${API_URL}movie/${params.movieId}?api_key=${API_KEY}&language=en-US`;
    const creditsUrl = `${API_URL}movie/${params.movieId}/credits?api_key=${API_KEY}&language=en-US`;

    fetchCreditDetails(creditsUrl);
    fetchMovieDetails(movieUrl);
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.home}>
        <h1>
          <Link exact to="/">
            Home
          </Link>{" "}
          / {movieDetails.original_title}
        </h1>
      </div>
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

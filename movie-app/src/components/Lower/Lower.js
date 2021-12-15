import React, { useEffect, useState } from "react";
import DisplayPoster from "../DisplayPoster/DisplayPoster";
import DisplayTrending from "../DisplayTrending/DisplayTrending";
import Spinner from "../Spinner/Spinner";
import "./Lower.css";
import {
  API_URL,
  API_KEY,
} from "../../Configs";

const Lower = (props) => {
  const searchInput = props.search;

  const [trendingMovie, setTrendingMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);

  const movieTrending = async (url) => {
    setLoading(true);

    const res = await fetch(url);
    const data = await res.json();
    setTrendingMovie(data.results);

    setLoading(false);
  };

  const movieSearch = async (url) => {
    setLoading(true);

    const res = await fetch(url + searchInput);
    const data = await res.json();
    setSearchMovie(data.results);

    setLoading(false);
  };

  //user search
  useEffect(() => {
    const searchUrl = `${API_URL}search/movie?api_key=${API_KEY}&page=1&query=`;
    const trendingUrl = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    if (searchInput === "") {
      movieTrending(trendingUrl);
    } else {
      setSearch(true);
      movieSearch(searchUrl);
    }
  }, [searchInput]);

  return (
    <div className="lower-container">
      {loading ? (
        <Spinner />
      ) : search ? (
        <>
          <div className="head">Searching for: {searchInput}</div>
          <DisplayPoster movies={searchMovie} />
        </>
      ) : (
        <>
          <div className="head">Popular</div>
          <DisplayTrending trending={trendingMovie} />
        </>
      )}
    </div>
  );
};

export default Lower;

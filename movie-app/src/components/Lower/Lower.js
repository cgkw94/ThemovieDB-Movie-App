import React, { useEffect, useState } from "react";
import DisplayPoster from "../DisplayPoster/DisplayPoster";
import DisplayTrending from "../DisplayTrending/DisplayTrending";
import Spinner from "../Spinner/Spinner";

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
    const searchUrl =
      "https://api.themoviedb.org/3/search/movie?api_key=1ada12e72311ae951cf663b616d5c520&page=1&query=";
    const trendingUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=1ada12e72311ae951cf663b616d5c520&language=en-US&page=1";

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
          <div>Searching for: {searchInput}</div>
          <DisplayPoster movies={searchMovie} />
        </>
      ) : (
        <>
          <div>Popular</div>
          <DisplayTrending trending={trendingMovie} />
        </>
      )}
    </div>
  );
};

export default Lower;

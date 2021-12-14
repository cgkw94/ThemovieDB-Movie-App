import React from "react";
import { Link } from "react-router-dom";
import styles from "./DisplayTrending.module.css";
import noImage from "./no_image.jpg";

const DisplayTrending = (props) => {
  const displayTrending = props.trending.map((data, index) => {
    const posterImage = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

    return (
      <Link to={"./movie/" + data.id}>
        <img
          className={styles.img}
          key={index}
          src={data.poster_path ? posterImage : noImage}
          id={data.id}
        />
      </Link>
    );
  });

  return <div className="movie-thumbnail">{displayTrending}</div>;
};

export default DisplayTrending;

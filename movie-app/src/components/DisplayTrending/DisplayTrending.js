import React from "react";
import { Link } from "react-router-dom";
import styles from "./DisplayTrending.module.css";
import noImage from "./no_image.jpg";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from "../../Configs";

const DisplayTrending = (props) => {
  const displayTrending = props.trending.map((data, index) => {
    const posterImage = `${IMAGE_BASE_URL}${POSTER_SIZE}/${data.poster_path}`;

    return (
      <Link to={"./movie/" + data.id}>
        <img
          className={styles.img}
          key={index}
          src={data.poster_path ? posterImage : noImage}
          id={data.id}
          alt="moviethumbnail"
        />
      </Link>
    );
  });

  return <div className="movie-thumbnail">{displayTrending}</div>;
};

export default DisplayTrending;

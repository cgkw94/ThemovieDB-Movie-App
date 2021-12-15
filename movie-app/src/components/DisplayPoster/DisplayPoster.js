import React from "react";
import { Link } from "react-router-dom";
import noImage from "./no_image.jpg";
import styles from "./DisplayPoster.module.css";
import {
  IMAGE_BASE_URL,
  POSTER_SIZE,
} from "../../Configs";

const DisplayPoster = (props) => {
  let displayPoster = props.movies.map((data, index) => {
    const posterImage = `${IMAGE_BASE_URL}${POSTER_SIZE}/${data.poster_path}`;
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
  return <div className="movie-thumbnail">{displayPoster}</div>;
};

export default DisplayPoster;

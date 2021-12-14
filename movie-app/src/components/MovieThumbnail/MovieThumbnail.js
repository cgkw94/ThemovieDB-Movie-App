import React from "react";
import noImage from "./no_image.jpg";
import styles from "./MovieThumbnail.module.css";

const MovieThumbnail = (props) => {
  return (
    <>
      <img
        className={styles.img}
        src={
          props.movie.poster_path
            ? "https://image.tmdb.org/t/p/w300/" + props.movie.poster_path
            : noImage
        }
        alt="moviethumb"
      />
    </>
  );
};

export default MovieThumbnail;

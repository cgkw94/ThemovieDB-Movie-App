import React from "react";
import noImage from "./no_image.jpg";
import styles from "./MovieThumbnail.module.css";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../Configs";

const MovieThumbnail = (props) => {
  return (
    <>
      <img
        className={styles.img}
        src={
          props.movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${props.movie.poster_path}`
            : noImage
        }
        alt="moviethumb"
      />
    </>
  );
};

export default MovieThumbnail;

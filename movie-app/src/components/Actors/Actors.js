import React from "react";
import noImage from "./no_image.jpg";
import styles from "./Actors.module.css";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../Configs";
import Spinner from "../Spinner/Spinner";

const Actors = (props) => {
  const actorList = props.actors.map((data, index) => {
    const actorImage = `${IMAGE_BASE_URL}${POSTER_SIZE}${data.profile_path}`;
    return (
      <>
        {props.loading ? (
          <Spinner />
        ) : (
          <div className={styles.actor}>
            <img
              className={styles.img}
              key={index}
              src={data.profile_path ? actorImage : noImage}
              alt="actorthumb"
            />
            <div className={styles.name}>{data.name}</div>
            <div className={styles.character}>{data.character}</div>
          </div>
        )}
      </>
    );
  });

  return <div className={styles.actorsContainer}>{actorList}</div>;
};

export default Actors;

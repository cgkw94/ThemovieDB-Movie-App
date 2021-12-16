import React from "react";
import noImage from "./no_image.jpg";
import styles from "./Actors.module.css";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../Configs";

const Actors = (props) => {
  const actorList = props.actors.map((data, index) => {
    const actorImage = `${IMAGE_BASE_URL}${POSTER_SIZE}${data.profile_path}`;
    return (
      <div className={styles.actor}>
        <img
          className={styles.img}
          key={index}
          src={data.profile_path ? actorImage : noImage}
          alt="actorthumb"
        />
        <div>{data.name} as:</div>
        <div>{data.character}</div>
      </div>
    );
  });

  return <div className={styles.actorsContainer}>{actorList}</div>;
};

export default Actors;

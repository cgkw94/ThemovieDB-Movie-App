import React from "react";
import noImage from "./no_image.jpg";
import styles from "./Actors.module.css";

const Actors = (props) => {
  const actorList = props.actors.map((data, index) => {
    const actorImage = `https://image.tmdb.org/t/p/w154${data.profile_path}`;
    return (
      <div className={styles.actor}>
        <img
          className={styles.img}
          key={index}
          src={data.profile_path ? actorImage : noImage}
          alt="actorthumb"
        />
        <span>{data.name} as:</span>
        <span>{data.character}</span>
      </div>
    );
  });

  return <div className={styles.actorsContainer}>{actorList}</div>;
};

export default Actors;

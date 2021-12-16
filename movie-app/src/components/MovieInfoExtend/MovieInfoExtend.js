import React from "react";
import { formatMoney, formatTime } from "../../Formatting";
import styles from "./MovieInfoExtend.module.css";

const MovieInfoExtend = (props) => {
  return (
    <div className={styles.movieinfocontainer}>
      <span className={styles.info}>
        Running Time: {formatTime(props.runtime)}
      </span>
      <span className={styles.info}>Budget: {formatMoney(props.budget)} </span>
      <span className={styles.info}>
        Revenue: {formatMoney(props.revenue)}{" "}
      </span>
    </div>
  );
};

export default MovieInfoExtend;

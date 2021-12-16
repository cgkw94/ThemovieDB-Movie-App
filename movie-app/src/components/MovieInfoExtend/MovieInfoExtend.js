import React from "react";
import { formatMoney, formatTime } from "../../Formatting";

const MovieInfoExtend = (props) => {
  return (
    <div className="movie-info-extend">
      <div className="running-time">
        Running Time: {formatTime(props.runtime)}
      </div>
      <div className="budget">Budget: {formatMoney(props.budget)} </div>
      <div className="revenue">Revenue: {formatMoney(props.revenue)} </div>
    </div>
  );
};

export default MovieInfoExtend;

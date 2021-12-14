import React from "react";

const MovieInfoExtend = (props) => {
  const formatTime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const mins = runtime % 60;
    return `${hours}h ${mins}m`;
  };

  const formatMoney = (money) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
    }).format(money);
  };

  return (
    <div className="movie-info-extend">
      <div className="running-time">
        Running Time: {formatTime(props.runtime)}
      </div>
      <div className="budget">Budget: {formatMoney(props.budget)} </div>
      <div className="revenue">revenue: {formatMoney(props.revenue)} </div>
    </div>
  );
};

export default MovieInfoExtend;

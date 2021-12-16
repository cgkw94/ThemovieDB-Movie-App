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

export {
    formatTime,
    formatMoney,
}
import exchangeRates from "./exchange-rates.json";

/**
 * @type {Array}
 * @example
 * ["Canada Dollar", "Euro", "Mexican Peso"]
 */
const currencies = Object.keys(exchangeRates);

/**
 * Converts a number from one currency to another
 * @param {number|string} currency1 name of currency e.g. "Japanese Yen"
 * @param {number|string} currency2 name of currency e.g. "Japanese Yen"
 * Using the exchange rate, converts currency 1 to currency 2
 * @return {number|string}
 */
const convertCurrency = (currency1, currency2, amount) => {
  if (!Number.isInteger(parseInt(amount)) || !currency1 || !currency2)
    return "";
  const exchangeRate = exchangeRates[currency2][currency1];
  return (amount * exchangeRate).toFixed(4);
};

export { currencies, convertCurrency };

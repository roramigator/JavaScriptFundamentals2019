import { currencies } from "./exchange-rates.js";
import DOMPurify from "dompurify";

/**
 * DOM elements
 */
const currencyDropdownLeft = document.querySelector("#currencyLeft");
const currencyDropdownRight = document.querySelector("#currencyRight");

/**
 * Populates the dropdowns with a list of currencies
 * @param {void}
 */
const populateDropdowns = () => {
  let htmlStr = "";
  currencies.forEach(
    currency => (htmlStr += `<option value="${currency}">${currency}</option>`)
  );
  currencyDropdownLeft.insertAdjacentHTML(
    "beforeend",
    DOMPurify.sanitize(htmlStr)
  );
  currencyDropdownRight.insertAdjacentHTML(
    "beforeend",
    DOMPurify.sanitize(htmlStr)
  );
};

export { populateDropdowns };

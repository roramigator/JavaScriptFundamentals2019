import Observable from "./observable";
import { populateDropdowns } from "./init";
/**
 * Before starting, please take a looks at "convertCurrency" in
 * @see exercises/13-observer-pattern/src/exchange-rates.js
 * You will be using the "convertCurrency" from there
 */
import { convertCurrency } from "./exchange-rates.js";

/**
 * You will be setting these variables
 */
let currencyLeft;
let amountLeft;
let currencyRight;
let amountRight;

/**
 * DOM elements
 */
const currencyDropdownLeft = document.querySelector("#currencyLeft");
const currencyDropdownRight = document.querySelector("#currencyRight");
const amountTextboxLeft = document.querySelector("#amountLeft");
const amountTextboxRight = document.querySelector("#amountRight");

/**
 * I solved this with two observers.
 * I completed one of them for you.
 */

const leftObserver = Observable();
const updateAmountRight = () => {
  amountRight = convertCurrency(currencyLeft, currencyRight, amountLeft);
  amountTextboxRight.value = amountRight;
};
leftObserver.subscribe(updateAmountRight);


const rightObserver = Observable();
const updateAmountLeft = () => {
  amountLeft = convertCurrency(currencyRight, currencyLeft, amountRight);
  amountTextboxLeft.value = amountLeft;
};
rightObserver.subscribe(updateAmountLeft);

/**
 * I've added event listeners to the left side of the page.
 * You will need to add event listeners to the right side.
 */
currencyDropdownLeft.addEventListener("change", e => {
  currencyLeft = e.target.value;
  
  currencyRight = currencyDropdownRight.value;
  amountLeft = amountTextboxLeft.value;
  leftObserver.notify(currencyLeft, currencyRight, amountLeft);
  /* Complete me */
});

amountTextboxLeft.addEventListener("input", e => {
  amountLeft = e.target.value;

  currencyRight = currencyDropdownRight.value;
  amountLeft = amountTextboxLeft.value;
  leftObserver.notify(currencyLeft, currencyRight, amountLeft);
  /* Complete me */
});



currencyDropdownRight.addEventListener("change", e => {
  currencyRight = e.target.value;
  
  currencyLeft = currencyDropdownLeft.value;
  amountRight = amountTextboxRight.value;
  rightObserver.notify(currencyRight, currencyLeft, amountRight);
  /* Complete me */
});

amountTextboxRight.addEventListener("input", e => {
  amountRight = e.target.value;

  currencyLeft = currencyDropdownLeft.value;
  amountRight = amountTextboxRight.value;
  rightObserver.notify(currencyRight, currencyLeft, amountRight);
  /* Complete me */
});

/**
 * Ignore me
 */

populateDropdowns();

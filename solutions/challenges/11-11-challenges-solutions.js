/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden".
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */

// I added the ids "viewCommentsButton" and "comments" to the HTML file
const viewCommentsButton = document.querySelector("#viewCommentsButton");
const comments = document.querySelector("#comments");

viewCommentsButton.addEventListener("click", e => {
  /**
   * Adds and removes hidden class
   * @see challenges/11-11-challenges/11-11-challenges.css
   */
  if (comments.classList.contains("hidden"))
    comments.classList.remove("hidden");
  else comments.classList.add("hidden");
});

/**
 * Challenge 2: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbox  and clicks
 * "Search", display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */

// I added the ids "search", "searchInput" and "searchResults" to the HTML file
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");

searchForm.addEventListener("submit", e => {
  e.preventDefault(); // Stops page from refreshing
  const userInput = searchInput.value;
  if (userInput)
    searchResults.textContent = `No results for ${userInput} found`;
});

/**
 * Challenge 3: Adding pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */

// I added the "data-toggle-group" to pagination buttons
const paginationButtonsObj = document.querySelectorAll("[data-toggle-group]");
const paginationButtons = [...paginationButtonsObj]; // Converting to an array

const showHideStudents = groupToShow => {
  const tableRowsObj = document.querySelectorAll("[data-group]");
  const tableRows = [...tableRowsObj]; // Converting to an array

  tableRows.forEach(row => {
    if (row.getAttribute("data-group") === groupToShow) {
      row.classList.remove("hidden");
    } else row.classList.add("hidden");
  });
};

paginationButtons.forEach(button => {
  button.addEventListener("click", e => {
    /**
     * Because of the icons inside of the buttons, I am using
     * "currentTarget" because I need the element the event is attached to,
     * instead of "target" (the element that trigger the element)
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
     */
    const groupToShow = e.currentTarget.getAttribute("data-toggle-group");
    showHideStudents(groupToShow);
  });
});

// Calling so that the results that are not in the first page are hidden
showHideStudents("1");

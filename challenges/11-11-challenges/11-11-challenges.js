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
document.querySelector("[data-btn]").addEventListener("click", e => {
    if(e.target.textContent === "View Comments"){
        e.target.textContent = "Hide Comments";
        document.querySelector("[data-comment]").classList.remove("hidden");
    }else{
        e.target.textContent = "View Comments";
        document.querySelector("[data-comment]").classList.add("hidden");
    }
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
document.querySelector("#form").addEventListener("submit", e => {
    e.preventDefault();
    const searchValue = document.querySelector("#search").value;
    const resultValue = document.querySelector("[data-result]");
    searchValue
        ? resultValue.textContent = `No results for '${searchValue}' found.`
        : resultValue.textContent = 'Type something';
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
document.querySelectorAll('[data-group="2"]').forEach(item => item.classList.add("hidden"));
const btns = document.querySelectorAll("[data-change]");

btns.forEach(btn => {
   btn.addEventListener("click", e => {
       const show = e.target.getAttribute("data-change");
       const hide = show === "1" ? "2" : "1";        
       document.querySelector(`[data-group="${show}"]`).classList.remove("hidden");
       document.querySelector(`[data-group="${hide}"]`).classList.add("hidden");
   });
});


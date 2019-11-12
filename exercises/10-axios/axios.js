/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
 */

const select = document.querySelector("#dropdown");
axios({
     method: "GET",
     url: "https://rickandmortyapi.com/api/character/"
 })
 .then(response => {
    const data = response.data.results;
    data.forEach(char => {
        const name = document.createElement("option");
        name.value = char.id;
        name.text = char.name;
        select.add(name, null);
    });
 });



 select.addEventListener("change", e => {
     const id = e.target.value;
     axios({
        method: "GET",
        url: `https://rickandmortyapi.com/api/character/${id}`
    })
    .then(response => {
        const char = response.data;

        const img = document.querySelector("#get-schwifty");
        const name = document.querySelector("#title-head");
        const origin = document.querySelector("#photo-caption");

        img.setAttribute("src", char.image);
        name.textContent = char.name;
        origin.textContent  = char.origin.name;

    });
 });
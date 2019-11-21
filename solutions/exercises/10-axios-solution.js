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

const populateDropDown = characters => {
  const select = document.querySelector("#dropdown");
  characters.forEach(character => {
    /**
     * @example
     * <option value="character.id">character.name</option>
     */
    const option = document.createElement("option");
    option.value = character.id;
    option.textContent = character.name;
    select.appendChild(option);
  });
};

const updateCharacterDisplay = character => {
  // Updates image
  const image = document.querySelector("img");
  image.src = character.image;

  // Displays name in heading
  const heading = document.querySelector("#title-head");
  heading.textContent = character.name;

  // Changes caption
  const caption = document.querySelector("#photo-caption");
  caption.textContent = character.textContent = character.origin.name;
};

const queryCharacterInfo = id => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => updateCharacterDisplay(response.data));
};

const addEventListener = () => {
  const select = document.querySelector("select");
  select.addEventListener("change", e => {
    queryCharacterInfo(e.target.value);
  });
};

axios
  .get("https://rickandmortyapi.com/api/character")
  .then(response => populateDropDown(response.data.results))
  .then(() => addEventListener());

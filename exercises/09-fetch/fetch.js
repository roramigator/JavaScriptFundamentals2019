/** An Example of the response you will receive when making an Http request
 * https://dog.ceo/api/breeds/image/random
 *
 * {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
    }
 *
 * 
 * 
 */

/**
 * As a user, I should be able to click on the a button to see random dog images
 * Please use Fetch in this Example
 *
 */



 document.querySelector("#btn").addEventListener("click", () => {
   const img = document.querySelector("#image");
   fetch('https://dog.ceo/api/breeds/image/random',{
      method: 'GET'
   })
   .then(response => response.json())
   .then(response => {
      img.setAttribute("src", response.message);
   });
});
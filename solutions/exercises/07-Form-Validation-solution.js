/**
 * As a engineer, I would like to have my form validated so the information is safe and correct.
*  
*  All the fields should be required!!

*  If a field is left empty on form submission, 
*  the form will display a red box indicating to the user that there has been an error.
*  
*  If the form is valid, the form should submit(vanish or disappear), and the user should see a confirmation of information they filled out. (Developers Discretion on how the information is presented to the user)


* Bonus Points
*  1) In addition to adding a class when a field is not valid display a message requesting the user to enter their information. 
      (Example Please Under Name)
*  2) Create a button that resets the form. 


* Developer notes
*  1) An error class named .error you can use this class to apply the proper css to an invalid element.
*  2) You can edit this form however you see fit as the engineer to achieve your goals. (i.e add ids or additional classes if needed)
*/

const form = document.querySelector("#form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const elements = [...event.target.elements].filter(element =>
    element.matches("input, select")
  );

  let isValid = true;
  elements.forEach(element => {
    if (element.value) {
      element.classList.remove("error");
    } else {
      isValid = false;
      element.classList.add("error");
    }
  });

  if (!isValid) return;

  form.style.display = "none";

  const box = document.querySelector("#box");
  elements.forEach(element => {
    /**
     * <p>GENDER: Male</p>
     */
    const paragraph = document.createElement("p");
    paragraph.textContent = `${element.getAttribute("placeholder")}: ${
      element.value
    }`;
    box.appendChild(paragraph);
  });
});

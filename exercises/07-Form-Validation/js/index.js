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

const formData = document.querySelector("#form");

const clearForm = () => {
    [...formData].forEach(element => {
        if(element.matches("[id]")){
            if(element.options){
                element.selectedIndex = 0;
                element.classList.remove(element.classList.value);
                element.classList.add("select--style-1");
            }else{
                element.value = "";
                element.classList.remove(element.classList.value);
                element.classList.add("input--style-1");
            }
        }
    });
};

document.querySelector("[data-clear]").addEventListener("click", () => {
    clearForm();
});

const menaceLabel = info => {
    info.style.visibility = 'visible';
    setTimeout(()=>{
        info.style.visibility = 'hidden';
    },2000);
};

const validateForm = () => {
    return new Promise((accept, reject) => {
        setTimeout(()=>{
            const element = [...formData];
            let ids = [];
            element.forEach(e => {
                const id = e.getAttribute("id");
                const input = document.querySelector(`[id="${id}"]`);
                if(id){
                    ids.push(id);
                    input.addEventListener("blur", e => {
                        const info = document.querySelector(`[data-${id}]`)
                        if(e.target.value == "" || e.target.selectedIndex == 0){
                            e.target.classList.remove(e.target.classList.value);
                            e.target.classList.add("error");
                            menaceLabel(info);
                        }else{
                            e.target.classList.remove(e.target.classList.value);
                            e.target.classList.add("success");
                        }
                    });
                }
            });
            const data = ids.reduce((inputs, id)=>{
                inputs.push(document.querySelector(`[id="${id}"]`));
                return inputs;
            },[]);
            data ? accept(data) : reject();
        },50);
    });
};

let inputsArray;
validateForm().then(inputs => inputsArray = inputs );

formData.addEventListener("submit", e => {
    e.preventDefault();
    inputsArray.forEach(check => {
        const id = check.getAttribute('id');
        const info = document.querySelector(`[data-${id}]`);
        if(check.selectedIndex === 0 || check.value === ""){
            check.classList.remove(check.classList.value);
            check.classList.add("error");
            menaceLabel(info);
        }
    });
    const data = inputsArray.reduce((userInfo, input)=>{
        if(input.classList.value === 'success') userInfo.push(input);
        return userInfo;
    },[]);
    if(data.length === 5){
        data.forEach(element => document.querySelector(`[data-${element.getAttribute("id")}s]`).textContent = element.value);
        const response = document.querySelector("[data-response]");
        formData.style.visibility = 'hidden';
        setTimeout(()=>{
            formData.style.visibility = 'visible';
        },2000);
        menaceLabel(response);
        // response.style.visibility = "visible";
        // response.addEventListener("click", () => {
        //     response.style.visibility = "hidden";
        //     clearForm();
        // });
    }
});
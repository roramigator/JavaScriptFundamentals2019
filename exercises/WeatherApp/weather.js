/*** As a user, I would like to be able to see my weather forecast for the day , so I  can be informed about the weather.*/

/** Developer notes:
 *    Weather API: https://openweathermap.org/api
 *     Api key: 886705b4c1182eb1c69f28eb8c520e20
 *
 *  1) Retrieve the user's latitude and longitude by using this API: https://ipapi.co/json/
 *  2) Using the user's latitude and longitude return the weather using this API: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
 *   a sample call will look like this: http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=886705b4c1182eb1c69f28eb8c520e20
 *  3) You can edit this weather app  however you see fit to achieve your goals. (i.e add ids or additional classes if needed). Make the weather app look more whimsical (ie icons based off of the weather forecast).
 *
 *
 *
 */
// time/date-------------------------------------------------------
const getDate = d => {
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];   
   return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
};
function setTime() {
   let today = new Date();
   let hours = today.getHours();
   let minutes = today.getMinutes();   
   let period = hours >= 12 ? 'PM' : 'AM';   
   hours = (hours % 12) || 12;   
   minutes = minutes < 10 ? "0"+minutes : minutes;   
   let date = `
      <span>${hours}:${minutes} ${period}</span>
      <span class="date">${getDate(today)}</span>
   `;
   document.getElementById('date').innerHTML = date;   
   setTimeout(function() {
     setTime()
   }, 500);
}
setTime();
// ------------------------------------------------------------------

 const getWeather = async url => {
    return await axios.get(url); // get weather data from API
 };

 const getCountryData = async (country) => {
   const api = await axios.get("https://roramigator.dev/api/master.php");
   const countryData = [...api.data].reduce((cities, city)=>{
     if(city.country === country) cities.push(city);
     return cities;
   },[]);
   return setCityList(countryData); // returns cities base on given 'country'
 };

 const getUserData = async () => {
   const userData = await axios.get("https://ipapi.co/json/");
   const latitude = userData.data.latitude;
   const longitude = userData.data.longitude;
   return { // returns position of user
      latitude: latitude,
      longitude: longitude
   }
 };
// so far, so good ---------------------------------------------------------------------------------------------

 //this is probably not the best practice////////////////////////////////////////////////////////////////////
 const setCityList = (data) => { // loads a list of cities
   //return new Promise((good, evil)=>{
      const cityList = document.querySelector("#cityList");
      data.forEach(city => {
         const li = document.createElement("li");
         li.textContent = city.name;
         li.setAttribute("data-id", city.id);
         cityList.appendChild(li);
         // li.addEventListener("click", e=>{
         //    const id = e.target.getAttribute("data-id");
         //    id ? good(id) : evil();
         // });
      });
      return cityList;
   //});
 };

 ////////search functionallity for input/////////////////////////////////////////////////////////////////////
 const loadCityList = () => {
   const input = document.querySelector("[data-city]");
   const letter = input.value.toUpperCase();
   let li = document.querySelectorAll("#cityList > li");
   li.forEach(e => {
      const txt = e.textContent;
      txt.toLocaleUpperCase().indexOf(letter) > -1
         ? e.style.display = ""
         : e.style.display = "none";
   });
 };

const filterData = weatherData => {
   return {
      id: weatherData.data.id,
      name: weatherData.data.name,
      temp: weatherData.data.main.temp,
      tempMin: weatherData.data.main.temp_min,
      tempMax: weatherData.data.main.temp_max,
      weather: { main: weatherData.data.weather[0].main, description: weatherData.data.weather[0].description },
      icon: {url: `http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`, i: weatherData.data.weather[0].icon},
   }
};

const getBg = (i,day) => {
   const status = i[i.length-1];
   if(status === "n") return "data-night"
   let res = "";
   if(status === "d"){
      day === "Clear" ? res="data-clear" : res="data-clouds";
   }
   return res;
};

const printWeather = (data) =>{
   const temp = Math.round(data.temp);
   let bg = getBg(data.icon.i, data.weather.main);
   const weather = `
      <h1 data-cityid="${data.id}">${data.name}</h1>
      <span class="card" ${bg}>
         <i data-temp>${temp}°</i>
         <i class="info"><img class="icon" src="${data.icon.url}">${data.weather.description}</i>
      </span>
   `;
   document.querySelector("#weather").innerHTML = weather;
};

const setWeather = async data => {
   const cityList = await getCountryData("US");
   if(data){
      return filterData(data);
   }else {
      const user = await getUserData();    
      //const api = `http://api.openweathermap.org/data/2.5/weather?lat=${user.latitude}&lon=${user.longitude}&units=imperial&appid=886705b4c1182eb1c69f28eb8c520e20`;
      const api = buildUrl(user);
      return {weatherData:filterData(await getWeather(api)), cityList: cityList.children};
   }
};

const buildUrl = (user, id) => {
   const units = document.querySelector(".toggle").checked ? "metric" : "imperial";
   const url = user
      ? `http://api.openweathermap.org/data/2.5/weather?lat=${user.latitude}&lon=${user.longitude}&units=${units}&appid=886705b4c1182eb1c69f28eb8c520e20` 
      : `http://api.openweathermap.org/data/2.5/weather?id=${id}&units=${units}&appid=886705b4c1182eb1c69f28eb8c520e20`;
   return url;
}

setWeather().then(res=> {   
   printWeather(res.weatherData);
   const lis = [...res.cityList];

   lis.forEach(city => {
      city.addEventListener("click", e => {
         cityId = city.getAttribute("data-id");
         const load = `
            <div id="grid">
               <div class="circle"></div>
            </div>
         `;

         document.querySelector("#weather").innerHTML = load;
         document.querySelector(".magic").classList.toggle("open");
         document.querySelector("#city").classList.toggle("visible");

         const id = e.target.getAttribute("data-id");
         //const api = `http://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&appid=886705b4c1182eb1c69f28eb8c520e20`;
         const api = buildUrl(undefined, id);
         getWeather(api).then(get=>{
            setWeather(get).then(set=>{
               printWeather(set);
            });
         });
      });
   });
});

document.querySelector("[data-city]").addEventListener("keyup", loadCityList);
document.querySelector(".octicon-globe").addEventListener("click", () =>{
   document.querySelector(".magic").classList.toggle("open");
   document.querySelector("#city").classList.toggle("visible");
});


document.querySelector(".toggle").addEventListener("click", e =>{
   // let res = "";
   // const temp = document.querySelector("[data-temp]").textContent;
   // const sub = temp.substring(0, temp.length-1);
   // const number = parseInt(sub ,10);
   // if(e.target.checked){
   //    // C = (F − 32) × 5/9
   //    res = (number-32) * 5/9;
   // }
   // else {
   //    // F = (C × 9/5) + 32
   //    res = (number * 9/5) + 32;
   // }
   // let with2Decimals = res.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
   // document.querySelector("[data-temp]").textContent = with2Decimals+"°";
   

   const id = document.querySelector("[data-cityid]").getAttribute("data-cityid");
   const api = buildUrl(undefined, id);
   getWeather(api).then(get=>{
      setWeather(get).then(set=>{
         printWeather(set);
      });
   });
   const load = `
      <div id="grid">
         <div class="circle"></div>
      </div>
   `;

   document.querySelector("#weather").innerHTML = load;
});
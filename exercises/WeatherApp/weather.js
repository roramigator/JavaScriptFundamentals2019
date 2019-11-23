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


 const getWeather = async url => {
    return await axios.get(url);
 };

 const getCountryData = async (country) => {
   const data = await axios.get("https://roramigator.dev/api/master.php");
   const cityData = [...data.data].reduce((acc, val)=>{
     if(val.country === country) acc.push(val);
     return acc;
   },[]);
   return cityData;
 };

 const getUserData = async () => {
   const userData = await axios.get("https://ipapi.co/json/");
   const latitude = userData.data.latitude;
   const longitude = userData.data.longitude;
   return {
      latitude: latitude,
      longitude: longitude
   }
 };

 //this is probably not the best practice
 const setCityList = (data) => {
   return new Promise((good, evil)=>{
      const cityList = document.querySelector("#cityList");
      data.forEach(city => {
         const li = document.createElement("li");
         li.textContent = city.name;
         li.setAttribute("data-id", city.id);
         cityList.appendChild(li);
         li.addEventListener("click", e=>{
            const id = e.target.getAttribute("data-id");
            id ? good(id) : evil();
         });
      });
   });
 };

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
 
 document.querySelector("[data-city]").addEventListener("keyup", loadCityList)

 document.querySelector(".octicon-globe").addEventListener("click", () =>{
   document.querySelector(".magic").classList.toggle("open");
   document.querySelector("#city").classList.toggle("visible");
 });

 const setWeather = async () => {
    let api = "";
    const usData = await getCountryData("US");
    const user = await getUserData();
    // this is wrong...
    await setCityList(usData)
      .then(res => {
         api = `https://api.openweathermap.org/data/2.5/weather?id=${res}&units=imperial&appid=886705b4c1182eb1c69f28eb8c520e20`;
      })
      .catch(()=>{
         api = `http://api.openweathermap.org/data/2.5/weather?lat=${user.latitude}&lon=${user.longitude}&units=imperial&appid=886705b4c1182eb1c69f28eb8c520e20`;
      });
        
    
    // units=imperial=F; units=metric=C
    

    const weatherData = await getWeather(api);

    const name = weatherData.data.name;
    const temp = weatherData.data.main.temp;
    const tempMin = weatherData.data.main.temp_min;
    const tempMax = weatherData.data.main.temp_max;
    const main = weatherData.data.weather[0].main;
    const description = weatherData.data.weather[0].description;
    const url = `http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`;
    const i = weatherData.data.weather[0].icon;

    return {
       name: name,
       temp: temp,
       tempMin: tempMin,
       tempMax: tempMax,
       weather: {main, description},
       icon: {url, i},
       city: usData
    };
 };


 const getBg = (i,day) => {
   const status = i[i.length-1];
   if(status === "n") return "data-night"
   if(status === "d"){
      day === "Clear" ? "data-clear" : "data-clouds";
   }
 };

 setWeather().then(res=>{
   const temp = Math.floor(res.temp);
   let bg = getBg(res.icon.i, res.weather.main);
   const data = `
      <h1>${res.name}</h1>
      <span class="card" ${bg}>
         <i>${temp}°</i>
         <i class="info"><img class="icon" src="${res.icon.url}">${res.weather.description}</i>
      </span>
   `;
   document.querySelector("#weather").innerHTML = data;
   console.log(res);
 });
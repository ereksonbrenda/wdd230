
// Path: chamber/script/chamber.js

const weatherText = document.querySelector(".weather-text");
const weatherIcon = document.querySelector(".weather-icon");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=39.11&lon=-108.63&appid=b0c58930027168209002a9060ab2561c&units=imperial";


async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();
function displayResults(data){
    //currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    //currentTemp.innerHTML = data.main.temp + "&deg;F";
    //const iconsrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const iconsrc = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    const desc = data.main.temp + "&deg;F - " + data.weather[0].description;
    console.log(iconsrc);
    console.log(desc);
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);

    weatherText.innerHTML = desc;
}


document.querySelector(".banner").addEventListener("click", () => {
    document.querySelector(".banner").style.display = "none";
}   );

var d = new Date();
var n = d.getDay();
console.log(n);
if (n == 1||n == 2||n == 3) {
    document.querySelector(".banner").style.display = "flex";
}
else{   
    document.querySelector(".banner").style.display = "none";
}
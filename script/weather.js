const weatherText = document.querySelector(".weather-text");
const weatherIcon = document.querySelector(".weather-icon");
const currentTemp = document.querySelector(".current-temp");
const day = document.querySelector(".weather-forcast-day");
const temp = document.querySelector(".weather-forcast-temp");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Grand%20Junction&appid=b0c58930027168209002a9060ab2561c&units=imperial";   

setInterval((
    function(){
        const d = new Date();
        const time = d.toLocaleTimeString();
        document.getElementById("time").innerHTML = time;
    }
), 1000);




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

let otherDayForcast = ''
data.daily.forEach((day, idx) => {
    if (idx == 0){

    }else{
        otherDayForcast += `
        <div class="weather-forcast-item">
            <div class="weather-forcast-day">${day.dt*1000}</div>
            <img src="http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            <div class="weather-forcast-temp">${day.weather[0].desc}</div>
        </div>
        `;                          
    }
});   
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

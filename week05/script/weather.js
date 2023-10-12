const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&appid={b0c58930027168209002a9060ab2561c
}&units=imperial";


async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data){
    currentTemp.innerHTML = "${data.  )&deg;F";
    const iconsrc = " ";
}//I dont understand what is being asked here. 
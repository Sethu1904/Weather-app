const apiKey = 'e4a91be916439b7d234cb048b40fb6b5';
let weatherData = document.getElementById('weather-data');
alert("Welcome to my Weather Application")
function getWeather() {
  
  let location = document.getElementById('location').value;

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      weatherData.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}&deg;F</p>
        <p>Pressure: ${data.main.pressure}&deg;F</p>
        <p>Temp-Min: ${data.main.temp_min}&deg;F</p>
        <p>Temp-Max: ${data.main.temp_max}&deg;F</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => console.log(error));
}

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
function displayCurrentTemperature(response) {
  console.log(response.data);

  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#current-temp");
  let dateElement = document.querySelector("#date");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let feelsLikeElement = document.querySelector("#feels-like");
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
}

let apiKey = "5921d610e62ddd7cd6382a774739ccc4";
cityName = "Indianapolis";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayCurrentTemperature);

function displayCurrentTemperature(response) {
  console.log(response.data);
}

let apiKey = "5921d610e62ddd7cd6382a774739ccc4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayCurrentTemperature);

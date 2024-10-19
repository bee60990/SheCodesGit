//In your project, display the current date and time using JavaScript: Tuesday 16:00

let currentTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let hour = currentTime.getHours();
let min = currentTime.getMinutes();
let date = `${day} ${hour}:${min}`;

let rightDate = document.querySelector(".current-details span");
rightDate.innerHTML = date;

//search bar, change h1

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector(".search-input");
  let heading = document.querySelector(".current-city");
  heading.innerHTML = city.value;
}

let searchBar = document.querySelector("form");
searchBar.addEventListener("submit", showCity);

function displayResponse(response) {
  console.log(response);
  console.log(response.data[0].email);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiUrl).then(displayResponse);

function showResponse(response) {
  console.log(response.data.temperature.current);

  let tempElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);

  let city = "Sydney";
  let description = response.data.condition.description;
  tempElement.innerHTML = `It is ${temperature}°C in ${city}`;
}

let apiKey = "9530ba64d5fta9c45b62cdbab1131eoe";

let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${city}&key=9530ba64d5fta9c45b62cdbab1131eoe&units=metric";

axios.get(apiUrl).then(showResponse);

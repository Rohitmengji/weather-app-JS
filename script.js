const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c56264739fmsh65d262aeb4b5e58p1365c0jsnaf94452ae805",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      // cloud_pct.innerHTML = response.cloud_pct;
      humidity.innerHTML = response.humidity;
      feels_like.innerHTML = response.feels_like;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener('click',(e)=>{
  e.preventDefault();
  getWeather(city.value)
})
getWeather("Hyderabad")

 
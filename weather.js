document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://api.weatherapi.com/v1/current.json?key=bdd7ae0c2ed248a180352612241608&q=";
    const apiLey = "bdd7ae0c2ed248a180352612241608"; 
  
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
  
    async function api(city) {
      try {
        const response = await fetch(apiUrl + city + '&appid=' + apiLey);
        console.log(apiUrl + city);
        const data = await response.json();
        console.log(data);
        const cityElement = document.querySelector(".city");
        const tempElement = document.querySelector(".temp");
        const humidityElement = document.querySelector(".Humidity");
        const windElement = document.querySelector(".Wind");
        if (cityElement && tempElement && humidityElement && windElement) {
          cityElement.innerHTML = data.location.name;
          tempElement.innerHTML = Math.round(data.current.temp_c) + '°c';
          humidityElement.innerHTML = data.current.humidity + "%";
          windElement.innerHTML = data.current.wind_kph + " km/h";
        } else {
          console.error("Elements not found in DOM");
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    searchBtn.addEventListener("click", () => {
      api(searchBox.value);
    });
    api("india");
  });
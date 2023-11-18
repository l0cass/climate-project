require("dotenv").config()

function PegaClima(){
  const getCity = document.getElementById('get-search').value;

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + getCity + '&appid=' + process.env.API_KEY + '&lang=pt_br' + '&units=metric')
  .then(response => response.json())
  .then(data => {    
    const cityName = data.name;
    const requestCity = document.getElementById('city');
    requestCity.innerText = cityName;

    const cityTemp = data.main.temp;
    const requestTemp = document.getElementById('temp');
    requestTemp.innerText = `${cityTemp}°C`;
    
    const cityDescription = data.weather[0].description;
    const requestDescription = document.getElementById('description');
    requestDescription.innerText = cityDescription;

    const img = document.getElementById('icon');
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
 
  })
  .catch(error => {
      console.log(error)
  });
}

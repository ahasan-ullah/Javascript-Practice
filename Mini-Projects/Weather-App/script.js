const apiKey="ebd0c1af0b5c6924d83370df91d2e555";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon');

async function checkWeather(city) {
  // const response=await fetch(apiURL+`&appid=${apiKey}`);
  // var data=await response.json();
  // console.log(data);

  const data=await fetch(apiURL+ `&q=${city}&appid=${apiKey}`).then((res)=>res.json());

  updateDetails(data);
}

function updateDetails(data){
  document.querySelector('.city').innerHTML=data.name;
  document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+`&deg;C`;
  document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
  document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';

  if(data.weather[0].main==='Clouds'){
    weatherIcon.src='images/clouds.png';
  }
  else if(data.weather[0].main==='Clear'){
    weatherIcon.src='images/clear.png';
  }
  else if(data.weather[0].main==='Rain'){
    weatherIcon.src='images/rain.png';
  }
  else if(data.weather[0].main==='Drizzle'){
    weatherIcon.src='images/drizzle.png';
  }
  else if(data.weather[0].main==='Mist'){
    weatherIcon.src='images/mist.png';
  }
}

searchBtn.addEventListener('click',()=>{
  console.log(searchBox);
  checkWeather(searchBox.value);
})
const apiKey="ebd0c1af0b5c6924d83370df91d2e555";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');


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

}

searchBtn.addEventListener('click',()=>{
  console.log(searchBox);
  checkWeather(searchBox.value);
})
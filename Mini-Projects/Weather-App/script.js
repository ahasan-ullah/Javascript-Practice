const apiKey="ebd0c1af0b5c6924d83370df91d2e555";
const apiURL="https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric";

async function checkWeather() {
  // const response=await fetch(apiURL+`&appid=${apiKey}`);
  // var data=await response.json();
  // console.log(data);
  
  const data=await fetch(apiURL +`&appid=${apiKey}`).then((res)=>res.json());
  console.log(data);
}

checkWeather();
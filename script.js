const sunrise=document.querySelector('.sunrise');
const sunset=document.querySelector('.sunset');
const curr_date=document.querySelector('.curr_date');
const curr_temp=document.querySelector('.curr_temp')
const curr_info=document.querySelector('.curr_info')
const wind_speed=document.querySelector('.wind_speed')
const air_hum=document.querySelector('.air_hum')
const pressure=document.querySelector('.pressure')
const prec_prob=document.querySelector('.prec_prob')
async function handleWeather(){
  event.preventDefault();
  const location=document.querySelector('form input[type="text"]').value;
  const apiUrl=`http://api.weatherapi.com/v1/forecast.json?key=755f6bfc62984db88bc171107221801&q=${location}&days=7&aqi=no&alerts=no`;
  const response=await fetch(apiUrl)
  if(response.status===200)
  {
    const data=await response.json();
    sunrise.innerHTML="Sunrise:"+data.forecast.forecastday[0].astro.sunrise;
    sunset.innerHTML="Sunset:"+data.forecast.forecastday[0].astro.sunset;
    curr_date.innerHTML=data.location.localtime;
    curr_temp.innerHTML=data.current.temp_c+"°C "+data.current.temp_f+"°F";
    curr_info.innerHTML=data.current.condition.text;
    wind_speed.innerHTML="Wind Speed:"+data.current.wind_kph;
    air_hum.innerHTML="Humidity:"+data.current.humidity;
    pressure.innerHTML="Pressure:"+data.current.pressure_mb;
    prec_prob.innerHTML="Precipitation:"+data.current.precip_mm;
  }
  else{
    console.log('Failed to fetch weather data:', response.statusText)
  }
}
window.addEventListener('load', () => {
  handleWeather(); 
});
const locationName=document.querySelector('.curr_location_name');
const locationDir=document.querySelector('.curr_location_dir')

const sunrise=document.querySelector('.sunrise');
const sunset=document.querySelector('.sunset');

const curr_date=document.querySelector('.curr_date');
const curr_temp=document.querySelector('.curr_temp')
const curr_info=document.querySelector('.curr_info')

const wind_speed=document.querySelector('.wind_speed')
const air_hum=document.querySelector('.air_hum')
const pressure=document.querySelector('.pressure')
const prec_prob=document.querySelector('.prec_prob')

const morning_temp1=document.querySelector('.morning_temp_1');
const morning_temp2=document.querySelector('.morning_temp_2');
const morning_time1=document.querySelector('.morning_time_1');
const morning_time2=document.querySelector('.morning_time_2');

const day_temp1=document.querySelector('.day_temp_1');
const day_temp2=document.querySelector('.day_temp_2');
const day_time1=document.querySelector('.day_time_1');
const day_time2=document.querySelector('.day_time_2');

const evening_temp1=document.querySelector('.evening_temp_1');
const evening_temp2=document.querySelector('.evening_temp_2');
const evening_time1=document.querySelector('.evening_time_1');
const evening_time2=document.querySelector('.evening_time_2');

const night_temp1=document.querySelector('.night_temp_1');
const night_temp2=document.querySelector('.night_temp_2');
const night_time1=document.querySelector('.night_time_1');
const night_time2=document.querySelector('.night_time_2');

async function handleWeather(){
  event.preventDefault();
  const location=document.querySelector('form input[type="text"]').value;
  const apiUrl=`https://api.weatherapi.com/v1/forecast.json?key=755f6bfc62984db88bc171107221801&q=${location}&days=7&aqi=no&alerts=no`;
  const response=await fetch(apiUrl)
  if(response.status===200)
  {
    const data=await response.json();
    console.log(data);
    locationName.textContent=data.location.name+" , "+data.location.region+" , "+data.location.country;
    locationDir.textContent="Lat : "+data.location.lat+" , Lon : "+data.location.lon;

    sunrise.textContent="Sunrise : "+data.forecast.forecastday[0].astro.sunrise;
    sunset.textContent="Sunset : "+data.forecast.forecastday[0].astro.sunset;

    curr_date.innerHTML=data.location.localtime;
    curr_temp.innerHTML=data.current.temp_c+"°C "+data.current.temp_f+"°F";
    curr_info.innerHTML=data.current.condition.text;

    wind_speed.innerHTML="Wind Speed:"+data.current.wind_kph;
    air_hum.innerHTML="Humidity:"+data.current.humidity;
    pressure.innerHTML="Pressure:"+data.current.pressure_mb;
    prec_prob.innerHTML="Precipitation:"+data.current.precip_mm;

    morning_temp1.textContent=data.forecast.forecastday[0].hour[6].temp_c+"°C ";
    morning_temp2.textContent=data.forecast.forecastday[0].hour[10].temp_c+"°C ";
    morning_time1.textContent=data.forecast.forecastday[0].hour[6].time.split(" ")[1]+" AM";
    morning_time2.textContent=data.forecast.forecastday[0].hour[10].time.split(" ")[1]+" AM";

    day_temp1.textContent=data.forecast.forecastday[0].hour[12].temp_c+"°C ";
    day_temp2.textContent=data.forecast.forecastday[0].hour[15].temp_c+"°C ";
    day_time1.textContent=data.forecast.forecastday[0].hour[12].time.split(" ")[1]+" PM";
    day_time2.textContent=data.forecast.forecastday[0].hour[15].time.split(" ")[1]+" PM";

    evening_temp1.textContent=data.forecast.forecastday[0].hour[17].temp_c+"°C ";
    evening_temp2.textContent=data.forecast.forecastday[0].hour[19].temp_c+"°C ";
    evening_time1.textContent=data.forecast.forecastday[0].hour[17].time.split(" ")[1]+" PM";
    evening_time2.textContent=data.forecast.forecastday[0].hour[19].time.split(" ")[1]+" PM";

    night_temp1.textContent=data.forecast.forecastday[0].hour[20].temp_c+"°C ";
    night_temp2.textContent=data.forecast.forecastday[0].hour[23].temp_c+"°C ";
    night_time1.textContent=data.forecast.forecastday[0].hour[20].time.split(" ")[1]+" PM";
    night_time2.textContent=data.forecast.forecastday[0].hour[23].time.split(" ")[1]+" PM";

  }
  else{
    console.log('Failed to fetch weather data:', response.statusText)
  }
}
window.addEventListener('load', () => {
  handleWeather(); 
});

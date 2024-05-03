export default async function getWeather(city) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?days=3&key=9ebd06ffaada483cb89191451242404&q=${city}`, { mode: 'cors' });
  const object = await response.json();
  console.log(object);
  const currentData = { 
    currentWeatherText: object.current.condition.text, 
    currentWeatherTemp: object.current.temp_c, 
    currentFeelsLike: object.current.feelslike_c,
    currentLocation: object.location.name,
  };
  const forecastData = {};
  for (let index = 0; index < 3; index += 1) {
    forecastData[`day${index}`] = {
      date: object.forecast.forecastday[index].date,
      minTemp: object.forecast.forecastday[index].day.mintemp_c,
      maxTemp: object.forecast.forecastday[index].day.maxtemp_c,
    };    
  };

  return { currentData, forecastData };
}
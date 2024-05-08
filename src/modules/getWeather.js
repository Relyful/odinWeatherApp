// eslint-disable-next-line import/no-cycle
import { currentUnit, currentLocation } from './changeUnit';
import { displayLoading, hideLoading } from './loading';

export default async function getWeather(city) {
  displayLoading();
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?days=3&key=9ebd06ffaada483cb89191451242404&q=${city}`,
    { mode: 'cors' },
  );
  if (!response.ok) {
    const errorObject = await response.json();
    hideLoading();
    throw new Error(errorObject.error.message);    
  } else {
    const object = await response.json();
    hideLoading();

    console.log(object);

    let currentTemp = 'celsius';
    currentLocation.current = city;

    if (currentUnit.current === 'celsius') {
      currentTemp = object.current.temp_c;
    } else {
      currentTemp = object.current.temp_f;
    }

    const currentData = {
      currentWeatherText: object.current.condition.text,
      currentIcon: object.current.condition.icon,
      currentWeatherTemp: currentTemp,
      currentFeelsLike: object.current.feelslike_c,
      currentIsDay: object.current.is_day,
      currentLocation: object.location.name,
    };
    const forecastData = {};
    for (let index = 0; index < 3; index += 1) {
      let minTemp;
      let maxTemp;
      if (currentUnit.current === 'celsius') {
        minTemp = object.forecast.forecastday[index].day.mintemp_c;
        maxTemp = object.forecast.forecastday[index].day.maxtemp_c;
      } else {
        minTemp = object.forecast.forecastday[index].day.mintemp_f;
        maxTemp = object.forecast.forecastday[index].day.maxtemp_f;
      }
      forecastData[`day${index}`] = {
        date: object.forecast.forecastday[index].date,
        minTemp,
        maxTemp,
        icon: object.forecast.forecastday[index].day.condition.icon,
      };
    }

    return { currentData, forecastData };
  }
}

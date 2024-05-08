// eslint-disable-next-line import/no-cycle
import getWeather from "./getWeather";
import { updateIcon, updateTemp, updateLocation, updateText, updateForecastDay } from "./drawData";

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default async function getWeatherData(city) {
  try {
    const weatherData = await getWeather(city);
    console.log(weatherData);
    updateIcon(weatherData.currentData);
    updateTemp(weatherData.currentData);
    updateLocation(weatherData.currentData);
    updateText(weatherData.currentData);
    updateForecastDay(weatherData.forecastData);
  } catch (error) {
    console.log(error);
  }  
}
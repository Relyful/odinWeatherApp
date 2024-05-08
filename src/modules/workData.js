// eslint-disable-next-line import/no-cycle
import getWeather from "./getWeather";
import { updateIcon, updateTemp, updateLocation, updateText, updateForecastDay, drawError } from "./drawData";

export default async function getWeatherData(city) {
  try {
    const weatherData = await getWeather(city);
    updateIcon(weatherData.currentData);
    updateTemp(weatherData.currentData);
    updateLocation(weatherData.currentData);
    updateText(weatherData.currentData);
    updateForecastDay(weatherData.forecastData);
  } catch (error) {
    console.log(error);
    drawError(error);
  }  
}
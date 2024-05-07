import getWeather from "./getWeather";
import { updateIcon, updateTemp, updateLocation } from "./drawData";

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default async function getWeatherData(city) {
  try {
    const weatherData = await getWeather(city);
    console.log(weatherData);
    const dateShizzle = new Date(weatherData.forecastData.day0.date);
    console.log(dayNames[dateShizzle.getDay()]);
    updateIcon(weatherData.currentData);
    updateTemp(weatherData.currentData);
    updateLocation(weatherData.currentData);
  } catch (error) {
    console.log(error);
  }  
}
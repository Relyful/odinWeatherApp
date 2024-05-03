import getWeather from "./getWeather";

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default async function getWeatherData(city) {
  try {
    const weatherData = await getWeather(city);
    console.log(weatherData);
    const dateShizzle = new Date(weatherData.forecastData.day0.date);
    console.log(dayNames[dateShizzle.getDay()]);
  } catch (error) {
    console.log(error);
  }  
}
import './style.css';

console.log('This is a test.');

async function getWeather(city) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9ebd06ffaada483cb89191451242404&q=london&q=${city}`, { mode: 'cors' });
  console.log(response);
  const object  = await response.json();
  console.log(object.current);
}

getWeather('bratislava');
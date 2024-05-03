import './style.css';
import getWeatherData from './modules/getData';

const input = document.querySelector('#city');
getWeatherData('Bratislava');
input.addEventListener('change', () => {
  getWeatherData(input.value);
});
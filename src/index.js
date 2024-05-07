import './style.css';
import getWeatherData from './modules/workData';
import { unitChangeUI, currentLocation } from './modules/changeUnit';

const input = document.querySelector('#city');
const fahrenheit = document.querySelector('.fahrenheit');

getWeatherData('Bratislava');
input.addEventListener('change', () => {
  getWeatherData(input.value);
  currentLocation.current = input.value;
});

fahrenheit.classList.add('idleUnit');
unitChangeUI();
import './style.css';
import getWeatherData from './modules/workData';
import { unitChangeUI, currentLocation } from './modules/changeUnit';

const input = document.querySelector('#city');
const button = document.querySelector('#getWeather');
const form = document.querySelector('#query');
const fahrenheit = document.querySelector('.fahrenheit');

function submit() {
  currentLocation.current = input.value;
  getWeatherData(currentLocation.current);  
  form.reset();
}

button.addEventListener('click', submit);

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    currentLocation.current = input.value;
    getWeatherData(currentLocation.current);  
    form.reset();
  }
})

getWeatherData('Bratislava');
fahrenheit.classList.add('idleUnit');
unitChangeUI();
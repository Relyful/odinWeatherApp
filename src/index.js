import './style.css';
import getWeatherData from './modules/workData';
import { unitChangeUI, currentLocation } from './modules/changeUnit';

const input = document.querySelector('#city');
const button = document.querySelector('#getWeather');
const form = document.querySelector('#query');
const fahrenheit = document.querySelector('.fahrenheit');

function submit() {
  getWeatherData(input.value);
  currentLocation.current = input.value;
  form.reset();
}

getWeatherData('Bratislava');
button.addEventListener('click', submit);
input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    submit();
  }
})

fahrenheit.classList.add('idleUnit');
unitChangeUI();
// eslint-disable-next-line import/no-cycle
import getWeatherData from "./workData";

const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector('.fahrenheit');

const currentUnit = {current: 'celsius'};
const currentLocation = {};

function unitChangeUI() {
  celsius.addEventListener('click', () => {
    if (currentUnit.current === 'fahrenheit') {
      currentUnit.current = 'celsius';
      fahrenheit.classList.add('idleUnit');
      celsius.classList.remove('idleUnit');
      console.log(currentLocation.current);
      getWeatherData(currentLocation.current);
      console.log(celsius.classList);
    }
  })
  
  fahrenheit.addEventListener('click', () => {
    if (currentUnit.current === 'celsius') {
      currentUnit.current = 'fahrenheit';
      celsius.classList.add('idleUnit');
      fahrenheit.classList.remove('idleUnit');
      console.log(currentLocation.current);
      getWeatherData(currentLocation.current);
      console.log(celsius.classList);
    }
  })
}

export { currentLocation, currentUnit, unitChangeUI  }
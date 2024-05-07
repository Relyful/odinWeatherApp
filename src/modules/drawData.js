const currentIcon = document.querySelector('.currentIcon');
const currentTemp = document.querySelector('.currentTemp');
const currentLocation = document.querySelector('.currentCity');
const currentText = document.querySelector('.currentText');


function updateIcon(dataObject) {
  const imgURL = dataObject.currentIcon;
  const img = document.createElement('img');
  img.src = imgURL;
  img.classList.add('imgIcon');
  currentIcon.replaceChildren();
  currentIcon.appendChild(img);
}

function updateTemp(dataObject) {
  currentTemp.innerText = `${dataObject.currentWeatherTemp  }°`;
}

function updateLocation(dataObject) {
  currentLocation.innerText = dataObject.currentLocation;
}

function updateText(dataObject) {
  currentText.innerText = dataObject.currentWeatherText;
}

export { updateIcon, updateTemp, updateLocation, updateText };
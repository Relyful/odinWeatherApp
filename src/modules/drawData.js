const currentIcon = document.querySelector('.currentIcon');
const currentTemp = document.querySelector('.currentTemp');
const currentLocation = document.querySelector('.currentCity');
const currentText = document.querySelector('.currentText');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const errorDiv = document.querySelector('.errorMsg');

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


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

function updateForecastDay(dataObject) {
  let workDate = new Date(dataObject.day0.date);
  first.children[0].innerText = dayNames[workDate.getDay()];
  first.children[1].children[0].innerText = Math.round(dataObject.day0.maxTemp);
  first.children[1].children[1].innerText = Math.round(dataObject.day0.minTemp);
  let imageStatus = new Image;
  imageStatus.src = dataObject.day0.icon;
  first.children[2].replaceChildren()
  first.children[2].appendChild(imageStatus);

  workDate = new Date(dataObject.day1.date);
  second.children[0].innerText = dayNames[workDate.getDay()];
  second.children[1].children[0].innerText = Math.round(dataObject.day1.maxTemp);
  second.children[1].children[1].innerText = Math.round(dataObject.day1.minTemp);
  imageStatus = new Image;
  imageStatus.src = dataObject.day1.icon;
  second.children[2].replaceChildren()
  second.children[2].appendChild(imageStatus);

  workDate = new Date(dataObject.day2.date);
  third.children[0].innerText = dayNames[workDate.getDay()];
  third.children[1].children[0].innerText = Math.round(dataObject.day2.maxTemp);
  third.children[1].children[1].innerText = Math.round(dataObject.day2.minTemp);
  imageStatus = new Image;
  imageStatus.src = dataObject.day2.icon;
  third.children[2].replaceChildren()
  third.children[2].appendChild(imageStatus);
}

function drawError(errorMsg) {
  errorDiv.innerText = errorMsg;
  errorDiv.classList.add('display');
  setTimeout(() => {
    errorDiv.classList.remove('display');
    errorDiv.innerText = '';
  }, 5000);
}


export { updateIcon, updateTemp, updateLocation, updateText, updateForecastDay, drawError };
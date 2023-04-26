// 1.
setTimeout(function () {
  console.log('Called after 2.5 seconds');
}, 2500);

// 2.
function logDelayedString(delay, string) {
  setTimeout(function () {
    console.log(string);
  }, delay * 1000);
}
logDelayedString(5, 'This string logged after 5 seconds');
logDelayedString(3, 'This string logged after 3 seconds');

// 3.
const button = document.querySelector('button');
button.addEventListener('click', () => {
  logDelayedString(5, 'Called after 5 seconds');
});

// 4.
const earthLogger = () => console.log('Earth');
const saturnLogger = () => console.log('Saturn');
function planetlogFunction(callback) {
  callback();
}
planetlogFunction(earthLogger);
planetlogFunction(saturnLogger);

// 5. & 6.
let coordinates;
function errorCallback() {
  alert('Please enable location access');
}
const mapOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function getLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      coordinates = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(coordinates);
      let map;

      async function initMap() {
        const { Map } = await google.maps.importLibrary('maps');
        map = new Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 16
        });
      }

      initMap();
    },
    errorCallback,
    mapOptions
  );
}
locationBtn = document.getElementById('locationBtn');
locationBtn.addEventListener('click', getLocation);

// 7.
function runAfterDelay(delay, callback) {
  setTimeout(() => callback(), delay * 1000);
}
runAfterDelay(4, () => {
  console.log('Should be logged after 4 seconds');
});

// 8.
window.addEventListener('dblclick', () => {
  console.log('double click!');
});

// 9.
function jokeCreator(boolean, callbackTrue, callbackFalse) {
  boolean ? callbackTrue() : callbackFalse();
}

function logFunnyJoke() {
  console.log(
    'I told my wife she was drawing her eyebrows too high. She looked surprised.'
  );
}
function logBadJoke() {
  console.log("What's blue and smells like red paint? Blue paint.");
}
let shouldTellFunnyJoke = true;
jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke);
shouldTellFunnyJoke = false;
jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke);

window.onload = async () => {
  const locationBtn = document.getElementById('user-location');
  const cityBtn = document.getElementById('city');
  const cityInput = document.querySelector('input');
  const display = document.getElementById('display');

  function getCoordinates() {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(resolve);
    });
  }

  async function fetchCoordsWeather(lat, lon) {
    return (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=868a2cba97bb490273667bbf1f1c4b90&units=metric`
      )
    ).json();
  }

  async function fetchCityWeather(city) {
    try {
      return (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=868a2cba97bb490273667bbf1f1c4b90&units=metric`
        )
      ).json();
    } catch (err) {
      console.error('This message does not log in case of 404 error??'); //couldn't figure this out :(
      console.error(err);
    }
  }

  function convertTime(unix) {
    return `${new Date(unix * 1000)
      .getHours()
      .toString()
      .padStart(2, '0')}:${new Date(unix * 1000)
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }

  function displayWeather(json) {
    console.log(json);
    display.innerText = '';
    const city = document.createElement('h1');
    city.innerText = json.name;

    const displayRow = document.createElement('div');
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right');

    const typeIcon = document.createElement('img');
    typeIcon.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
    typeIcon.alt = `icon of a ${json.weather[0].description}`;
    const temp = document.createElement('h3');
    temp.innerText = `${Math.round(json.main.temp)}°C`;
    const feel = document.createElement('div');
    feel.innerText = `Feels like ${Math.round(json.main.feels_like)}°C`;

    const wind = document.createElement('div');
    wind.innerText = `${json.wind.speed} m/s`;
    const clouds = document.createElement('div');
    clouds.innerText = `${json.clouds.all}% cloudiness`;
    const sunrise = document.createElement('div');
    sunrise.innerText = `Sunrise: ${convertTime(json.sys.sunrise)}`;
    const sunset = document.createElement('div');
    sunset.innerText = `Sunset: ${convertTime(json.sys.sunset)}`;

    display.appendChild(city);
    leftDiv.appendChild(typeIcon);
    leftDiv.appendChild(temp);
    displayRow.appendChild(leftDiv);
    rightDiv.appendChild(feel);
    rightDiv.appendChild(wind);
    rightDiv.appendChild(clouds);
    rightDiv.appendChild(sunrise);
    rightDiv.appendChild(sunset);
    displayRow.appendChild(rightDiv);
    display.appendChild(displayRow);
  }

  locationBtn.addEventListener('click', async () => {
    try {
      const location = await getCoordinates();
      const coordinates = location.coords;
      const coordsJson = await fetchCoordsWeather(
        coordinates.latitude,
        coordinates.longitude
      );
      displayWeather(coordsJson);
      console.log(coordinates);
      let map;
      async function initMap() {
        const { Map } = await google.maps.importLibrary('maps');
        map = new Map(document.getElementById('map'), {
          center: { lat: coordinates.latitude, lng: coordinates.longitude },
          zoom: 12
        });
      }
      initMap();
    } catch (err) {
      console.error(err);
    }
  });

  cityBtn.addEventListener('click', async () => {
    try {
      const map = document.getElementById('map');
      map.innerText = '';
      const city = cityInput.value.toLowerCase();
      const cityJson = await fetchCityWeather(city);
      displayWeather(cityJson);
    } catch (err) {
      console.error(err);
    }
  });
};

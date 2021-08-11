'use strict';

{
  // ======================
  // =====オブジェクト取得
  const weatherCardTitle = document.getElementsByClassName(
    'weatherCard__item__ttl'
  );

  const weatherCardImage = document.getElementsByClassName(
    'weatherCard__item__image'
  );

  const weatherCardTemp = document.getElementsByClassName(
    'weatherCard__item__th__temprature'
  );

  const weatherCardHumi = document.getElementsByClassName(
    'weatherCard__item__th__humidity'
  );

  // =======================
  // ======変数定義
  const loc = ['Fukuoka', 'Osaka', 'Nagoya', 'Tokyo', 'Sapporo'];
  const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '1f86440dd49d48dedb35e1a402023335&lang=ja&units=metric';
  const IMAGE_BASE_URL = 'http://openweathermap.org/img/wn/';

  const getWeatherData = async (path, location, index) => {
    weatherCardTitle[index].textContent = location;
    const res = await fetch(path);
    const data = await res.json();
    const image = data.weather[0].icon;
    weatherCardTemp[index].textContent = `${data.main.temp}°`;
    weatherCardHumi[index].textContent = `${data.main.humidity}%`;
    weatherCardImage[index].src = `${IMAGE_BASE_URL}${image}@2x.png`;
  };

  for (let index = 0; index < loc.length; index++) {
    let location = loc[index];
    let url = `${BASE_URL}?q=${location},JP&appid=${API_KEY}`;
    getWeatherData(url, location, index);
  }
}

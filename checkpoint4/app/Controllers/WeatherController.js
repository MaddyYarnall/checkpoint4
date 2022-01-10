import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


async function getWeather() {
  try {
    await weatherService.getWeather()
  } catch (error) {
    console.error(error)
  }
}

function _drawWeather() {
  const weather = ProxyState.weather
  document.getElementById('weatherr').innerHTML = weather.template
}


export class WeatherController {
  constructor() {
    ProxyState.on('weather', _drawWeather)
    weatherService.getWeather()
  }

  drawWeather() {
    _drawWeather()
  }

}



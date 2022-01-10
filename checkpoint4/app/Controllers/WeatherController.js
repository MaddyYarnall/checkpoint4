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
  document.getElementById('weatherr').innerHTML = weather.Template
}

function toCel() {
  let cel = 273.64 - 273.15
  document.getElementById('weatherr')
}

//NOTE need to add this to my document

function toFaren() {
  let faren = 273.64 - 273.15 * 1.8 + 32
  document.getElementById('weatherr')
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



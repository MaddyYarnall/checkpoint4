import { weatherService } from "../Services/WeatherService.js"


async function getWeather() {
  try {
    await weatherService.getWeather()
  } catch (error) {
    console.error(error)
  }
}



export class WeatherController {
  constructor() {
    getWeather()
  }

}



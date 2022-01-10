import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { weatherApi } from "./AxiosService.js"

class WeatherService {

  async getWeather() {
    let res = await weatherApi.get('')
    console.log(res.data.name)
    console.log(res.data.main.temp)
    ProxyState.weather = new Weather(res.data)
    console.log(ProxyState.weather)
  }



}



export const weatherService = new WeatherService()
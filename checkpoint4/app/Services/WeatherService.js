import { weatherApi } from "./AxiosService.js"

class WeatherService {
  async getWeather() {
    const res = await weatherApi.get('')
    console.log(res.data)
  }

}


export const weatherService = new WeatherService()
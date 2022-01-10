export class Weather {
  constructor(data) {
    this.description = data.weather[0].description
    this.temp = data.main.temp
    this.city = data.name
  }

  get Template() {
    return `
    <p>${this.city}</p>
    <p>${this.temp}℉</p>
    <p>${this.description}</p>
  `
  }
}


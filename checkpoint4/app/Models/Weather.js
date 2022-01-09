export class Weather {
  constructor(data) {
    this.description = data.weather.description
    this.temp = data.main.temp
    this.city = data.name
    this.icon = data.weather.icon
  }

  get Template() {
    return `
    <p>${this.icon}</p>
    <p>${this.city}</p>
    <p>${this.temp}</p>
    <p>${this.description}</p>
  `
  }
}
export class Quotes {
  constructor(data) {
    this.id = data.id,
      this.content = data.content,
      this.author = data.author
  }

  get Template() {
    return `
    
    `
  }
}

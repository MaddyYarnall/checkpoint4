export class Quotes {
  constructor(data) {
    this.id = data.id,
      this.content = data.content,
      this.author = data.author
  }

  get Template() {
    return `
    <div class="col-12 m-3 quoteandauthor">
                <h3 class="text-center text-light quote">${this.content}</h3>
                <h5 class="text-center text-light author">${this.author}</h5>
              </div>
    `
  }
}

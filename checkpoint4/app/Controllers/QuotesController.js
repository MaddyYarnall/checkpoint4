import { quotesService } from "../Services/QuotesService.js"

async function getQuotes() {
  try {
    await quotesService.getQuotes()
  } catch (error) {
    console.error(error)
  }
}


export class QuotesController {
  constructor() {

    getQuotes()

  }
}
import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"

async function getQuotes() {
  try {
    await quotesService.getQuotes()
  } catch (error) {
    console.error(error)
  }
}

function _drawQuotes() {
  const quotes = ProxyState.quotes
  document.getElementById('quotes').innerHTML = quotes.Template
}


export class QuotesController {
  constructor() {
    ProxyState.on('quotes', _drawQuotes)
    quotesService.getQuotes()
  }

  drawQuotes() {
    _drawQuotes()
  }

}
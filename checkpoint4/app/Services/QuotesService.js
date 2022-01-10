import { ProxyState } from "../AppState.js"
import { Quotes } from "../Models/Quotes.js"
import { quotesApi } from "./AxiosService.js"

class QuotesService {

  async getQuotes() {
    let res = await quotesApi.get('')
    console.log(res.data.content)
    console.log(res.data.author)
    ProxyState.quotes = new Quotes(res.data)
    console.log(ProxyState.quotes)
  }
}


export const quotesService = new QuotesService()
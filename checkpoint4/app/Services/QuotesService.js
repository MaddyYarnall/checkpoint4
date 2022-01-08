import { ProxyState } from "../AppState.js"
import { quotesApi } from "./AxiosService.js"


class QuotesService {

  async getQuotes() {
    let res = await quotesApi.get('')
    console.log(res.data.content)
    ProxyState.quotes = res.data.content
    console.log(ProxyState.quotes)
  }
}


export const quotesService = new QuotesService()
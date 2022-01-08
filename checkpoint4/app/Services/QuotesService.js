import { ProxyState } from "../AppState.js"
import { quotesApi } from "./AxiosService.js"

class QuotesService {

  async getQuotes() {
    const res = await quotesApi.get('')
    console.log(res.data)
    ProxyState.quote = res.data.content
    console.log(ProxyState.quote)
  }
}

export const quotesService = new QuotesService()
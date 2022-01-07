import { ProxyState } from "../AppState.js";
import { imagesApi } from "./AxiosService.js";


class ImagesService {
  async getImages() {
    const res = await imagesApi.get('')
    console.log(res.data)
    ProxyState.image = res.data.largeImgUrl
    console.log(ProxyState.image)
  }
}



export const imagesService = new ImagesService()
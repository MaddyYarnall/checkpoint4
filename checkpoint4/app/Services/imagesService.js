import { imagesApi } from "./AxiosService.js";


class ImagesService {
  async getImages() {
    const res = await imagesApi.get('')
    console.log(res.data)
  }
}




export const imagesService = new ImagesService()
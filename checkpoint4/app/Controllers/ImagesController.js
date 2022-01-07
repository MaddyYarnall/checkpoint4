import { imagesService } from "../Services/ImagesService.js"


async function getImages() {
  try {
    await imagesService.getImages()
  } catch (error) {
    console.error(error)
  }
}
export class ImagesController {
  constructor() {

    getImages()
  }
}
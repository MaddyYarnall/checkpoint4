import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"


async function getImages() {
  try {
    await imagesService.getImages()
  } catch (error) {
    console.error(error)
  }
}

function setBackgroundImage() {
  document.body.style.backgroundImage = `url('${ProxyState.image}')`
}

export class ImagesController {
  constructor() {

    getImages()

    ProxyState.on('image', setBackgroundImage)

  }
}


import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";


class App {

  imagesController = new ImagesController()

  todosController = new TodosController()

  quotesController = new QuotesController()



}

window["app"] = new App();

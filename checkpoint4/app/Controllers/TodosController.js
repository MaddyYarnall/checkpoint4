import { todosService } from "../Services/TodosService.js"

async function getMyTodos() {
  try {
    await todosService.getMyTodos()
  } catch (error) {
    console.error(error)
  }
}

export class TodosController {
  constructor() {
    getMyTodos()
  }

}


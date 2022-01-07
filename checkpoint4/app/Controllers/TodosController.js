import { ProxyState } from "../AppState.js"
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

  async createTask() {
    window.event.preventDefault()
    console.log('submitted')
    const tasks = ProxyState.tasks
    let template = ''
    tasks.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template
  }


}


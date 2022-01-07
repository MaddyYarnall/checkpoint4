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
    const form = window.event.target
    const todosData = {
      id: form.id.value,
      completed: form.completed.value,
      user: form.user.value,
      description: form.description.value,
    }
  }


}


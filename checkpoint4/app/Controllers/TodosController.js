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
    const taskData = {
      // @ts-ignore
      description: form.description.value
    }

    await todosService.createTask(taskData)
  }


}


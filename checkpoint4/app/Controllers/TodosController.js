import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

async function getMyTodos() {
  try {
    await todosService.getMyTodos()
  } catch (error) {
    console.error(error)
  }
}

function drawTasks() {
  const tasks = ProxyState.tasks
  let template = ''
  tasks.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
}


export class TodosController {
  constructor() {
    ProxyState.on('tasks', drawTasks)
    todosService.getMyTodos()

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

  async removeTask(id) {
    try {
      console.log('deleting', id)
      if (window.confirm('Are you sure you want to delete this task?')) {
        await todosService.removeTask(id)
      }
    } catch (error) {
      console.error(error)
    }


  }

  async completedTask(id) {
    try {
      await todosService.completedTask(id)
    } catch (error) {
      console.error(error)
    }
  }



}

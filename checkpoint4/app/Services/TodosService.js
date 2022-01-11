import { ProxyState } from "../AppState.js"
import { Todos } from "../Models/Todos.js"
import { sandboxApi } from "./AxiosService.js"


class TodosService {

  async getMyTodos() {
    const res = await sandboxApi.get('')
    console.log(res.data)
    ProxyState.tasks = res.data.map(t => new Todos(t))
  }

  async createTask(todosData) {
    const res = await sandboxApi.post('', todosData)
    console.log('post task res', res.data)
    ProxyState.tasks = [new Todos(res.data), ...ProxyState.tasks]
  }

  async completedTask(id) {
    console.log(id);
    const task = ProxyState.tasks.find(t => t.id === id)
    task.completed = !task.completed
    await sandboxApi.put(task.id, task)
    ProxyState.tasks = ProxyState.tasks
  }

  async removeTask(id) {
    const res = await sandboxApi.delete(`${id}`)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)

  }

}

export const todosService = new TodosService()


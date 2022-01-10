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
    //TODO find a way to incoorporate res.data into the tasks array for better page reactivity (dont have to refresh the page to see the task that was just added)
  }

  async completedTask(id) {
    const task = ProxyState.tasks
    const res = await sandboxApi.put(`${id}`, task)
    ProxyState.tasks = ProxyState.tasks
  }







  async removeTask(id) {
    const res = await sandboxApi.delete(`${id}`)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)

  }


}

export const todosService = new TodosService()


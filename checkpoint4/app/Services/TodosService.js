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

  // async completedTask() {
  //   const task = ProxyState.tasks
  //   task.completed = !task.completed
  //   const res = await sandboxApi.put(task.id, task)
  //   ProxyState.tasks = ProxyState.tasks
  // }

  //NOTE I need help trying to get the task to stay checked on reload... tried following the example from the spellbook lecture but i'm getting red squiggly bois that are mad 

  //NOTE Don't forget to un-comment line 55 in the todos controller

  async removeTask(id) {
    const res = await sandboxApi.delete(`${id}`)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)

  }
}

export const todosService = new TodosService()


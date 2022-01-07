import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"


class TodosService {


  async getAllTasks() {
    const res = await sandboxApi.get('todos')
    console.log('get my taskssss', res.data)
    ProxyState.tasks = res.data
  }

  async getMyTodos() {
    const res = await sandboxApi.get('')
    console.log(res.data)
  }

  async createTask(todosData) {
    const res = await sandboxApi.post('', todosData)
    console.log('post task res', res.data)
  }
}

export const todosService = new TodosService()


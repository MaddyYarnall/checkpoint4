import { sandboxApi } from "./AxiosService.js"


class TodosService {

  async getMyTodos() {
    const res = await sandboxApi.get('')
    console.log(res.data)
  }

  async createTask(taskData) {
    const res = await sandboxApi.post('tasks', taskData)
    console.log('post task res', res.data)
  }
}

export const todosService = new TodosService()
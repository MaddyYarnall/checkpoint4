import { sandboxApi } from "./AxiosService.js"
class TodosService {

  async getMyTodos() {
    const res = await sandboxApi.get('')
    console.log(res.data)
  }




}
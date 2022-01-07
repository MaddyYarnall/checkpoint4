export class Todos {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    <div class="card m-3" style="width: 30%">
            <div class="card-body">
              <h5 class="card-title text-center">Your To-Do's</h5>
              <div id="todos">
                <p><input type="checkbox"> ${this.description} </p>
                <p><input type="checkbox"> ${this.description} </p>
                <p><input type="checkbox"> ${this.description} </p>
              </div>

              <form type="text">
                <input onsubmit="app.TodosController.createTask('${newTask.id}')" type="text" placeholder="Task..">
                <button class="btn-sm btn-dark text-light">ADD</button>
              </form>
            </div>
          </div>
  `
  }



}
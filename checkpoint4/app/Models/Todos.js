export class Todos {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    <div class="card" style="width: 30%">
    <div class="card-body">
      <h5 class="card-title text-center">Your To-Do's</h5>
      <input type="checkbox" name="task" value="${this.description}">
      <label for="task">${this.description}</label>
    </div>
  </div>
  `
  }



}
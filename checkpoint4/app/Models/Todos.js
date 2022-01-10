export class Todos {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    <p><input type="checkbox" ${this.completed ? 'checked' : ''}  onclick="app.todosController.completedTask('${this.id}')" > ${this.description} <img src="https://img.icons8.com/plumpy/24/000000/x.png" onclick="app.todosController.removeTask('${this.id}')" class="selectable"/> </p>
  `
  }



}
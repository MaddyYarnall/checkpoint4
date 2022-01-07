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
    <h5 class="card-title">Your To-Do's</h5>
    <li>${this.description}</li>
  </div>
</div>
  `
  }



}
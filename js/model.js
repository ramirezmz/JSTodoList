// OOP
export default class Model {
  constructor() {
    this.view = null;
    this.todos = [];
    this.currentId = 1;
  }
  setView(view){
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }

  findTodo(id) {
    return this.todos.findIndex((todo) => todo.id === id);
  }

  toggleCompleted(id) {
    const index = this.findTodo(id);
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    console.log(this.todos);
  }

  addTodo(title, description) {
    const todo = {
      // si una propiedad es igual a su valor (title: title), podemos usar (title)
      id: this.currentId++,
      title,
      description,
      completed: false,
    }
    this.todos.push(todo);
    console.log(this.todos);

    // return Object.assign({}, todo) = CLONAR OBJETO
    return {...todo};
  }

  removeTodo(id) {
    const index = this.findTodo(id);
    this.todos.splice(index, 1);
  }
}
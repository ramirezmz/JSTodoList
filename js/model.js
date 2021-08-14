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
}
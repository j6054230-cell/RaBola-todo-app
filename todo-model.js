/** @class Todo modelini boshqarish uchun */
class Todo {
  constructor(text) { 
    this.id = Date.now(); 
    this.text = text; 
    this.done = false; 
  }
}
class TodoList {
  constructor() { this.todos = []; }
  addTodo(text) { this.todos.push(new Todo(text)); }
  removeTodo(id) { this.todos = this.todos.filter(t => t.id !== id); }
}

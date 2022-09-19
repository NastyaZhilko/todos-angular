import { Component, OnInit } from '@angular/core'
import { Todo, TodosService } from './services/todos.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appTitle = 'Todolist'
  todos$!: Observable<Todo[]>

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos()
    this.todos$ = this.todosService.todos$
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    const title = 'my todo'
    this.todosService.createTodo(title)
  }

  deleteTodo(id: string) {
    this.todosService.deleteTodo(id)
  }
}

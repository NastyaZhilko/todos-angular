import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { TodosService } from '../../services/todos.service'
import { Todo } from '../../models/todos.model'

@Component({
  selector: 'todo-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
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

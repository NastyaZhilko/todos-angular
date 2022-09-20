import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environment } from '../../../environments/environment.prod'
import { BeatyLoggerServiceService } from '../../core/services/beaty-logger-service.service'
import { Todo } from '../models/todos.model'
import { BaseResponse } from '../../core/models/core.model'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$ = new BehaviorSubject<Todo[]>([])

  constructor(
    private http: HttpClient,
    private beatyLoggerServiceService: BeatyLoggerServiceService
  ) {}

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(result => {
        this.todos$.next(result)
      })
  }

  createTodo(title: string) {
    this.http
      .post<BaseResponse<{ item: Todo }>>(`${environment.baseUrl}/todo-lists`, { title })
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(result => {
          return [result.data.item, ...this.todos$.getValue()]
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(todoId: string) {
    this.http
      .delete<BaseResponse>(`${environment.baseUrl}/todo-lists/${todoId}`)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(todo => todo.id !== todoId)
        })
      )
      .subscribe(filteredTodos => {
        this.todos$.next(filteredTodos)
      })
  }

  private errorHandler(err: HttpErrorResponse) {
    this.beatyLoggerServiceService.log(err.message, 'error')
    return EMPTY
  }
}

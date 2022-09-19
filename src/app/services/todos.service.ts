import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, filter, map, Observable } from 'rxjs'
import { environment } from '../../environments/environment.prod'
import { BeatyLoggerServiceService } from './beaty-logger-service.service'

export interface Todo {
  id: string
  title: string
  addedDate: string
  order: number
}

interface CreateTodoResponse {
  data: {
    item: Todo
  }
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

interface RemoveTodoResponse {
  data: {}
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environment.apiKey,
    },
  }
  todos$ = new BehaviorSubject<Todo[]>([])

  constructor(
    private http: HttpClient,
    private beatyLoggerServiceService: BeatyLoggerServiceService
  ) {}

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(result => {
        this.todos$.next(result)
      })
  }

  createTodo(title: string) {
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        `${environment.baseUrl}/todo-lists`,
        { title },
        this.httpOptions
      )
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
      .delete<BaseResponse>(`${environment.baseUrl}/todo-lists/${todoId}`, this.httpOptions)
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

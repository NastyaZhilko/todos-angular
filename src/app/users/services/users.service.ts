import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environment.prod'
import { catchError, EMPTY, map, Observable } from 'rxjs'
import { BeatyLoggerServiceService } from '../../core/services/beaty-logger-service.service'
import { User, UsersResponse } from '../models/user.model'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private beatyLoggerServiceService: BeatyLoggerServiceService
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<UsersResponse>(`${environment.baseUrlUsers}/users`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.beatyLoggerServiceService.log(err.message, 'error')
        return EMPTY
      }),
      map(result => result.items)
    )
  }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment.prod'
import { AuthMeResponse } from '../models/core.model'
import { ResultCodes } from '../enums/core.enums'

@Injectable()
export class AuthService {
  isAuth = false
  constructor(private http: HttpClient) {}

  authMe() {
    this.http.get<AuthMeResponse>(`${environment.baseUrl}/auth/me`).subscribe(result => {
      if (result.resultCode === ResultCodes.success) {
        this.isAuth = true
      }
    })
  }
}

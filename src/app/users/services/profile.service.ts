import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment.prod'
import { Observable } from 'rxjs'
import { ProfileResponse } from '../models/profile.model'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(userId: number): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(`${environment.baseUrlUsers}/profile/${userId}`)
  }
}

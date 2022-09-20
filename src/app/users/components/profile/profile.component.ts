import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { ProfileService } from '../../services/profile.service'
import { ProfileResponse } from '../../models/profile.model'

@Component({
  selector: 'todo-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<ProfileResponse>

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'))
    if (userId) {
      this.getProfile(userId)
    }
  }

  getProfile(userId: number) {
    this.profile$ = this.profileService.getProfile(userId)
  }

  backToUsersHandler() {
    this.router.navigate(['/users'])
  }
}

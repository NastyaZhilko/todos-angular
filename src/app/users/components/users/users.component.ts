import { Component, OnInit } from '@angular/core'
import { UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { User } from '../../models/user.model'

@Component({
  selector: 'todo-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers()
  }
}

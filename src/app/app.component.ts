import { Component, OnInit } from '@angular/core'
import { AuthService } from './core/services/auth.service'

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appTitle = 'Todolist'

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authMe()
  }
}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { ProfileComponent } from './components/profile/profile.component'
import { UsersComponent } from './components/users/users.component'

@NgModule({
  declarations: [ProfileComponent, UsersComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [ProfileComponent, UsersComponent],
})
export class UsersModule {}

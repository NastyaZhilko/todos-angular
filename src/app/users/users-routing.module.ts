import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UsersComponent } from './components/users/users.component'
import { AuthGuard } from '../guards/auth.guard'
import { ProfileComponent } from './components/profile/profile.component'

const routes: Routes = [
  { path: '', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

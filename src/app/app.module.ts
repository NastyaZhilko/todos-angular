import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module'
import { PageNotFoundModule } from './page-not-found/page-not-found.module'
import { TodosModule } from './todos/todos.module'
import { UsersModule } from './users/users.module'
import { CoreModule } from './core/core.module'
import { AuthModule } from './auth/auth.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PageNotFoundModule,
    TodosModule,
    UsersModule,
    AuthModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

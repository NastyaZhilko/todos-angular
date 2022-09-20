import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from './services/auth.service'
import { BeatyLoggerServiceService } from './services/beaty-logger-service.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { CredentialsInterceptor } from './interceptors/credentials.interceptor'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    BeatyLoggerServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}

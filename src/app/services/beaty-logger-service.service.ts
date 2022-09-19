import { Injectable } from '@angular/core'

type SeverityType = 'error' | 'success' | 'info' | 'warning'

@Injectable({
  providedIn: 'root',
})
export class BeatyLoggerServiceService {
  log(message: string, severity: SeverityType) {
    console.log(`%c${message}`, this.getSeverity(severity))
  }

  getSeverity(severity: SeverityType) {
    switch (severity) {
      case 'success':
        return 'background: green; color: white'
      case 'info':
        return 'background: blue; color: white'
      case 'error':
        return 'background: red; color: white'
      case 'warning':
        return 'background: orange; color: black'
      default:
        return ''
    }
  }
}

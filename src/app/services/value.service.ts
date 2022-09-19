import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class ValueService {
  value$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  increment() {
    this.value$.next(this.value$.getValue() + 1)
  }

  decrement() {
    this.value$.next(this.value$.getValue() - 1)
  }
}
